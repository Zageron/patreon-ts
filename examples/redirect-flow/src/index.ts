import express = require('express');

import
{
    Request,
    Response,
    NextFunction,
}
    from 'express-serve-static-core';

import * as dotenv from "dotenv";
import { format as formatUrl } from "url";
import { AddressInfo } from "net";
import
{
    create,
    ModuleOptions,
    OAuthClient,
    AuthorizationTokenConfig,
    AccessToken,
} from "simple-oauth2";

dotenv.config({ path: "./.env" });

const cwd: string = process.cwd();
console.log(cwd);

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

export function ShowPatronInformation(_req: Request, res: Response): void
{
    if (accessTokenStore)
    {
        res.send(`Token\n${accessTokenStore.expired() ? "Expired" : "Good"}`);
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
        const result = await client.authorizationCode.getToken(tokenConfig);
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
