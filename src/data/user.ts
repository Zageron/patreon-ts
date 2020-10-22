import { BaseType, IData } from "./base_data"
import { Campaign } from "./campaign";
import { Member } from "./member";

interface Attributes
{
    about?: string;
    can_see_nsfw?: boolean;
    created?: Date;
    email?: string;
    first_name?: string;
    full_name?: string;
    hide_pledges?: boolean;
    image_url?: string;
    is_email_verified?: boolean;
    last_name?: string;
    like_count?: number;
    social_connections?: any;
    thumb_url?: string;
    url?: string;
    vanity?: string;
};

interface Relationships
{
    campaign?: Campaign;
    memberships?: Member[];
}

interface UserData extends IData
{
    attributes?: Attributes;
    relationships?: Relationships;
}

export class User extends BaseType
{
    data?: UserData;

    public constructor(init?: Partial<User>)
    {
        super();
        Object.assign(this, init);
    }
}
