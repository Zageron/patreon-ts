import rpn from "request-promise-native";

import { PatreonToken } from "./types/token"

async function PatreonRequest(accessToken: PatreonToken, query: string): Promise<string>
{
    const options = {
        url: `${query}`,
        headers: {
            Authorization: `Bearer ${ accessToken.access_token }`
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

export * as Endpoints from "./endpoints";
export * as Schemas from "./schemas/schemas";
export * as Data from "./data";
export * as Types from "./types"
export { PatreonRequest };
