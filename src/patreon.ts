import rpn from "request-promise-native";

import * as Schemas from "./schemas/schemas";
import { AccessToken } from "simple-oauth2";
import * as Endpoints from "./endpoints";

async function PatreonRequest(accessToken: AccessToken, query: string): Promise<string>
{
    const options = {
        url: `${query}`,
        headers: {
            Authorization: `Bearer ${accessToken.token.access_token}`
        }
    };

    try
    {
        return await rpn(options);
    }
    catch (error)
    {
        return Promise.reject(error);
    }
}

export { PatreonRequest, Endpoints, Schemas };
