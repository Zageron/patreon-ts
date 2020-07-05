import { DefaultAttributes, DefaultRelationships } from "./schema_types";

interface UserAttributes
{
    email?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    is_email_verified?: string;
    vanity?: string;
    about?: string;
    image_url?: string;
    thumb_url?: string;
    can_see_nsfw?: string;
    created?: string;
    url?: string;
    like_count?: string;
    hide_pledges?: string;
    social_connections?: string;
};

interface UserRelationships
{
    memberships?: string;
    campaign?: string;
}

class User
{
    attributes?: UserAttributes;
    relationships?: UserRelationships;

    public constructor(init?: Partial<User>)
    {
        Object.assign(this, init);
    }
};

interface UserDefaults
{
    attributes: UserAttributes;
    relationships: UserRelationships;
};

const constants: UserDefaults = {
    attributes: {
        email: 'email',
        first_name: 'first_name',
        last_name: 'last_name',
        full_name: 'full_name',
        is_email_verified: 'is_email_verified',
        vanity: 'vanity',
        about: 'about',
        image_url: 'image_url',
        thumb_url: 'thumb_url',
        can_see_nsfw: 'can_see_nsfw',
        created: 'created',
        url: 'url',
        like_count: 'like_count',
        hide_pledges: 'hide_pledges',
        social_connections: 'social_connections',
    },
    relationships: {
        memberships: 'memberships',
        campaign: 'campaign',
    }
};

const default_attributes: DefaultAttributes =
    [
        constants.attributes.email as string,
        constants.attributes.is_email_verified as string,
    ];

const default_relationships: DefaultRelationships =
    [
        constants.relationships.memberships as string,
        constants.relationships.campaign as string,
    ];

export
{
    constants,
    default_attributes,
    default_relationships
};

export { User, UserAttributes, UserRelationships };
