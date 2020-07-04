import formUrlEncoded from "form-urlencoded";
import * as os from "os";

function userAgentString()
{
    return `Patreon-TS, platform ${os.platform()}-${os.release()}-${os.arch()}`;
}

interface BaseParameters
{
    client_id: string;
    client_secret: string;
    grant_type: string;
}

export interface OAuthRedirectParameters
{
    code?: string;
    state?: string;
}

interface TokenPostRequestParameters
{
    method: string;
    headers: string;
    body: string;
    param: never;
    credentials: string;
    compress: boolean;
}

const options: TokenPostRequestParameters = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': userAgentString()
    },
    body: formUrlEncoded(params),
    params: params,
    credentials: 'include',
    compress: false
};

// interface GetTokenParameters extends BaseParameters
// {
//     code: string;
//     redirect_uri: string;
// }

// interface UpdateTokenParameters extends BaseParameters
// {
//     refresh_token: string;
//     grant_type: string;
// }

interface ErrorDefinitions
{
    INVALID_GRANT: string;
    INVALID_CLIENT: string;
}

const ERRORS: ErrorDefinitions = {
    INVALID_GRANT: "invalid_grant",
    INVALID_CLIENT: "invalid_client",
};

function ProcessErrors(err: string, params: BaseParameters): string
{
    let errorString: string;

    switch (err)
    {
        case ERRORS.INVALID_GRANT:
            errorString = `Invalid grant_type: ${params.grant_type}`;
            break;
        case ERRORS.INVALID_CLIENT:
            errorString = `Invalid client_id: ${params.client_id}`;
            break;

        default:
            errorString = `Unknown error: ${err}`;
            break;
    }

    return errorString;
}

const emptyParams: BaseParameters =
{
    client_id: "",
    client_secret: "",
    grant_type: ""
};

ProcessErrors("", emptyParams);
