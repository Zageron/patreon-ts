import { format as formatUrl } from 'url';
import { String } from 'typescript-string-operations';
import { encode, ParsedUrlQueryInput } from 'querystring';
import { Campaign, Member, User } from "./schemas/schemas";

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
    MemberById: ComplexEndpoint;
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
    CampaignMembersById: "campaigns/{0}/members",
    CampaignPostsById: "campaigns/{0}/posts",
    MemberById: "members/{0}",
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

function GetEndpointFieldsName(object: Campaign | Member | User): string
{
    let fieldsName = String.Empty;

    if (object instanceof Campaign)
    {
        fieldsName = "campaign";
    }
    else if (object instanceof Member)
    {
        fieldsName = "member";
    }
    else if (object instanceof User)
    {
        fieldsName = "user";
    }

    return fieldsName;
}

export function BuildEndpointQuery(object: Campaign | Member | User): ParsedUrlQueryInput
{
    let attributesString: string = String.Empty;
    let relationshipsString: string = String.Empty;

    if (object.attributes)
    {
        attributesString = Object.values(object.attributes).reduce((prev, cur) => `${prev},${cur}`);
    }

    if (object.relationships)
    {
        relationshipsString = Object.values(object.relationships).reduce((prev, cur) => `${prev},${cur}`);
    }

    let query: ParsedUrlQueryInput = {};

    if (attributesString)
    {
        const field: string = `fields[${GetEndpointFieldsName(object)}]`;
        query[field] = attributesString;
    }

    if (relationshipsString)
    {
        query["include"] = relationshipsString;
    }

    return query;
}
