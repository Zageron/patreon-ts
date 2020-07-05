import express = require('express');

import * as dotenv from 'dotenv';

import
{
    NextFunction,
    Request,
    Response
} from 'express-serve-static-core';

import { AddressInfo } from 'net';

import
{
    AccessToken,
    AuthorizationTokenConfig,
    create,
    ModuleOptions,
    OAuthClient,
    Token
} from 'simple-oauth2';

import { format as formatUrl } from 'url';

import { PatreonRequest, Endpoints, Schemas } from "../../../dist/patreon";
import { ParsedUrlQueryInput } from 'querystring';

dotenv.config({ path: "./.env" });

const CLIENT_ID: string = process.env.PATREON_CLIENT_ID as string;
const PATREON_HOST: string = "https://www.patreon.com";
const PATREON_TOKEN_PATH: string = "/api/oauth2/token";
const PATREON_AUTHORIZE_PATH: string = "/oauth2/authorize";


const authorizeRedirectUri: string = formatUrl({
    protocol: "http",
    host: "localhost:8081",
    pathname: "/oauth/redirect",
});

const stateCheck: string = "chill";
const scopes: string = "identity campaigns identity.memberships campaigns.members";

let accessTokenStore: AccessToken;

const credentials: ModuleOptions = {
    client:
    {
        id: CLIENT_ID,
        secret: process.env.PATREON_CLIENT_SECRET as string
    },
    auth:
    {
        tokenHost: PATREON_HOST,
        tokenPath: PATREON_TOKEN_PATH,
        authorizePath: PATREON_AUTHORIZE_PATH
    }
};

// Build the OAuth2 client.
const client: OAuthClient<"patreon"> = create(credentials);

export async function ShowPatronInformation(_req: Request, res: Response): Promise<void>
{
    if (accessTokenStore)
    {
        const UserQueryObject: Schemas.User = new Schemas.User(
            {
                attributes:
                {
                    about: Schemas.user_constants.attributes?.about,
                },
            });

        const endpointQuery: ParsedUrlQueryInput = Endpoints.BuildEndpointQuery(UserQueryObject);

        const query: string = Endpoints.BuildSimpleEndpoint(
            Endpoints.SimpleEndpoints.Identity,
            endpointQuery);

        const result: string = await PatreonRequest(accessTokenStore, query);
        const obj: any = JSON.parse(result);
        res.send(`
        <html>
        <head>
        <style type="text/css">
        code { background-color: gray; color: blue; }
        </style>
        </head>
        <body>
        <pre>${ JSON.stringify(obj, null, '  ')}</pre>
        </body>
        </html>`);
        console.log(JSON.stringify(obj, null, '  '));
    }
    else
    {
        res.send(`<a href="/patreon">Link with Patreon</a>`);
    }
}

// Patreon OAuth2 Flow Entrypoint
export function PatreonAuthorizeMiddleware(_req: Request, res: Response): void
{
    // Build AuthorizationUrl
    const authorizationUri: string = client.authorizationCode.authorizeURL(
        {
            redirect_uri: authorizeRedirectUri,
            scope: scopes,
            state: stateCheck,
        });

    // Redirect user browser to Patreon's Auth url.
    res.redirect(authorizationUri);
}

// Patreon Redirect Flow Entrypoint
export async function PatreonRedirectMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>
{
    let tokenConfig: AuthorizationTokenConfig;
    let stateVar: string;
    {
        const
            {
                code,
                state
            } = req.query;

        tokenConfig = {
            code: code as string,
            scope: scopes,
            redirect_uri: authorizeRedirectUri,
        };

        stateVar = state as string;
    }

    if (stateCheck != stateVar)
    {
        res.redirect("/");
    }

    // Save the access token
    try
    {
        const result: Token = await client.authorizationCode.getToken(tokenConfig);
        accessTokenStore = client.accessToken.create(result);
        console.log(accessTokenStore);
        res.redirect("/");
    }
    catch (error)
    {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.log('Access Token Error', error.message);
        next(error);
    }
}

const PORT: number = 8081;
const app: express.Express = express();
const server = app.listen(PORT, () =>
{
    const port: AddressInfo = server.address() as AddressInfo;
    console.log(`Listening on http://localhost:${port.port}`);
});
app.get("/", ShowPatronInformation);
app.get("/patreon", PatreonAuthorizeMiddleware);
app.get("/oauth/redirect", PatreonRedirectMiddleware);
