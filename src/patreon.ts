export function doSomething(): string
{
    return "";
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
