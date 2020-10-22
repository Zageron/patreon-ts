import { AccessToken, TokenType } from "simple-oauth2";

enum PatreonTokenType
{
    Refresh = "refresh_token",
    Access = "access_token",
}

interface ExpiredFunction
{
    (expirationWindowSeconds?: number): boolean;
}

interface RefreshFunction
{
    (params?: {}): Promise<PatreonToken>;
}

interface RevokeFunction
{
    (tokenType: PatreonTokenType): Promise<void>;
}

interface RevokeAllFunction
{
    (): Promise<void>;
}

interface PatreonToken
{
    readonly access_token: string;
    readonly expires_at: Date;
    readonly expires_in: number;
    readonly refresh_token: string;
    readonly scope: string;
    readonly token_type: string;
    readonly version: string;

    readonly accessToken: AccessToken;

    isExpired: ExpiredFunction;
    refresh: RefreshFunction;
    revoke: RevokeFunction;
    revokeAll: RevokeAllFunction;
}

function CreatePatreonTokenFromOAuthToken(accessToken: AccessToken): PatreonToken
{
    const customRefresh: RefreshFunction =
        async function (params?: {}): Promise<PatreonToken>
        {
            const refreshedAccessToken = await patreonToken.accessToken.refresh(params);
            return CreatePatreonTokenFromOAuthToken(refreshedAccessToken);
        };

    const customRevoke: RevokeFunction =
        async function (tokenType): Promise<void>
        {
            accessToken.revoke(tokenType.toString() as TokenType);
        };

    const patreonToken: PatreonToken =
        {
            access_token: accessToken.token.token.access_token,
            expires_at: accessToken.token.token.expires_at,
            expires_in: accessToken.token.token.expires_in,
            refresh_token: accessToken.token.token.refresh_token,
            scope: accessToken.token.token.scope,
            token_type: accessToken.token.token.token_type,
            version: accessToken.token.token.version,

            accessToken: accessToken,

            isExpired: accessToken.expired,
            refresh: customRefresh,
            revoke: customRevoke,
            revokeAll: accessToken.revokeAll,

        } as PatreonToken;

    return patreonToken;
}


export { PatreonTokenType as TokenType, PatreonToken, CreatePatreonTokenFromOAuthToken };
