import { format as formatUrl } from 'url';
import { String } from 'typescript-string-operations';
import { encode, ParsedUrlQueryInput } from 'querystring';

export const ApiHost = "www.patreon.com/api/oauth2/v2";

export type SimpleEndpoint = string;
export type ComplexEndpoint = string;

export interface SimpleEndpointCollection
{
    Identity: SimpleEndpoint;
    Campaigns: SimpleEndpoint;
}

export interface ComplexEndpointCollection
{
    CampaignById: ComplexEndpoint;
    CampaignMembersById: ComplexEndpoint;
    CampaignPostsById: ComplexEndpoint;
    MemeberById: ComplexEndpoint;
    PostById: ComplexEndpoint;
}

export const SimpleEndpoints: SimpleEndpointCollection =
{
    Identity: "identity",
    Campaigns: "campaigns",
};

export const ComplexEndpoints: ComplexEndpointCollection =
{
    CampaignById: "campaigns/{0}",
    CampaignMembersById: "campaigns/{0}/memebers",
    CampaignPostsById: "campaigns/{0}/posts",
    MemeberById: "members/{0}",
    PostById: "posts/{0}",
};

export function BuildSimpleEndpoint(endpoint: SimpleEndpoint, search?: ParsedUrlQueryInput): string
{
    return formatUrl({
        protocol: "https",
        host: ApiHost,
        pathname: endpoint,
        slashes: true,
        search: encode(search, "&"),
    });
}

export function BuildComplexEndpoint(endpoint: ComplexEndpoint, id: string, search?: ParsedUrlQueryInput): string
{
    return BuildSimpleEndpoint(String.Format(endpoint, id), search);
}

export function BuildFieldSelectorString(...args: string[]): string
{
    return args.join()
}

const thing: ParsedUrlQueryInput =
{
    include: "address,currently_entitled_tiers,user",
    fields: "full_name"
}

console.log(BuildComplexEndpoint(ComplexEndpoints.CampaignMembersById, "0", thing));
