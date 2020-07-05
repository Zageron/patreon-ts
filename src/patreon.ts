//GET https://www.patreon.com/api/oauth2/api/current_user

import rpn from "request-promise-native";

import * as schemas from "./schemas/schemas";
import { AccessToken } from "simple-oauth2";
import * as Endpoints from "./endpoints";

// Setting Campaign Information
// Getting User's Memebership Information

export async function Request(accessToken:AccessToken, ) : Promise<string>
{
    const options = {
        url: 'https://www.patreon.com/api/oauth2/v2/identity?include=campaign',
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

export default { schemas, Request, Endpoints };

//import isPlainObject from 'is-plain-object';

// const _encode = value => Array.isArray(value) && !value.length ? '%5B%5D' : encodeURI(value);

// const encodeParam = (value, key) =>
// {
//     if (isPlainObject(value))
//     {
//         return Object.keys(value).reduce((memo, _key) =>
//         {
//             return `${memo}${key}%5B${_key}%5D=${_encode(value[_key])}&`;
//         }, '');
//     }
//     else
//     {
//         return `${key}=${_encode(value)}&`;
//     }
// };

// const encodeParams = (params) =>
// {
//     if (!params)
//     {
//         return '';
//     }

//     return Object.keys(params).reduce((memo, key) =>
//         `${memo}${encodeParam(params[key], key)}`
//         , '');
// };

// function jsonApiURL(url, _params)
// {
//     const separator = url.includes('?') ? '&' : '?';

//     const params = _params
//         ? encodeParams(_params)
//         : '';

//     return `${url}${separator}${params}`;
// }

// export default jsonApiURL;
