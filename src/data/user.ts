import { BaseType, IData } from "./base_data"
import { Campaign } from "./campaign";
import { Member } from "./member";

interface Attributes
{
    readonly about?: string;
    readonly can_see_nsfw?: boolean;
    readonly created?: Date;
    readonly email?: string;
    readonly first_name?: string;
    readonly full_name?: string;
    readonly hide_pledges?: boolean;
    readonly image_url?: string;
    readonly is_email_verified?: boolean;
    readonly last_name?: string;
    readonly like_count?: number;
    readonly social_connections?: any;
    readonly thumb_url?: string;
    readonly url?: string;
    readonly vanity?: string;
};

interface Relationships
{
    readonly campaign?: Campaign;
    readonly memberships?: Member[];
}

interface UserData extends IData
{
    readonly attributes?: Attributes;
    readonly relationships?: Relationships;
}

export class User extends BaseType<User>
{
    public readonly data?: UserData;
}
