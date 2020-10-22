import * as DotEnv from 'dotenv';
import * as OAuth from 'simple-oauth2';
// import * as Patreon from "../../../dist/patreon";
// import * as QueryString from 'querystring';
// import { Member } from '../../../dist/data';

DotEnv.config({ path: "./.env" });

const credentials: OAuth.ModuleOptions = {
    client:
    {
        id: process.env.PATREON_CLIENT_ID as string,
        secret: process.env.PATREON_CLIENT_SECRET as string
    },
    auth:
    {
        tokenHost: "https://www.patreon.com",
        tokenPath: "/api/oauth2/token",
        authorizePath: "/oauth2/authorize"
    }
};


async function run()
{
    const EXPIRATION_WINDOW_IN_SECONDS = 300;


    if (accessToken.expired(EXPIRATION_WINDOW_IN_SECONDS))
    {
        const refreshParams =
        {
            scope: accessToken.token.scope,
        };
        try
        {
            accessToken = await accessToken.refresh(refreshParams);
            var accessTokenRefreshed = JSON.stringify(accessToken.token);
            console.log("refreshed: " + accessTokenRefreshed);
        }
        catch (error)
        {
            console.log('Error refreshing access token: ', error.message);
        }
    }

    console.log(accessTokenJSONString);
}

// Create the AuthorizatoinCode client.
const client: OAuth.AuthorizationCode = new OAuth.AuthorizationCode(credentials);

// Restore a token with that grant type.
const accessTokenJSONString = ``;
let accessToken: OAuth.AccessToken = client.createToken(JSON.parse(accessTokenJSONString));


run();

//
// const client: OAuth.ClientCredentials = new OAuth.ClientCredentials(credentials);
// const token: OAuth.Token =
// {
//     // invalid // access_token: process.env.PATREON_CAMPAIGN_ACCESS_TOKEN,
// };
// const accessToken: OAuth.AccessToken = client.createToken(token)

// const MemberQueryObject: Patreon.Schemas.MemberSchema = new Patreon.Schemas.MemberSchema(Patreon.Schemas.complete_member_schema);

// const endpointQuery: QueryString.ParsedUrlQueryInput = Patreon.Endpoints.BuildEndpointQuery(MemberQueryObject);
// console.log(endpointQuery);

// const query: string = Patreon.Endpoints.BuildComplexEndpoint(
//     Patreon.Endpoints.ComplexEndpoints.CampaignMembersById,
//     process.env.PATREON_CAMPAIGN_ID as string,
//     endpointQuery);

// Patreon.PatreonRequest(accessToken, query)
// .then((result: string) =>
// {
//     let base: Patreon.Data.Root = new Patreon.Data.Root(JSON.parse(result));
//     console.log(base);

//     for (const item of base.data)
//     {
//         const member: Patreon.Data.Member = item as Member;
//         console.log(member.attributes.full_name);
//     }
// });

