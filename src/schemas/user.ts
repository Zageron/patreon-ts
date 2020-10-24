export interface UserAttributes
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

export interface UserRelationships
{
    memberships?: string;
    campaign?: string;
}

export interface UserDefaults
{
    attributes: UserAttributes;
    relationships: UserRelationships;
};

export class UserSchema
{
    attributes?: UserAttributes;
    relationships?: UserRelationships;

    public constructor(init?: Partial<UserSchema>)
    {
        Object.assign(this, init);
    }
};

// Use these to construct your desired schema. See below.
export const constants: UserDefaults = {
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

// Copy and paste this, modify it to your preference.
export const complete_schema: UserSchema =
{
    attributes:
    {
        email: constants.attributes.email,
        first_name: constants.attributes.first_name,
        last_name: constants.attributes.last_name,
        full_name: constants.attributes.full_name,
        is_email_verified: constants.attributes.is_email_verified,
        vanity: constants.attributes.vanity,
        about: constants.attributes.about,
        image_url: constants.attributes.image_url,
        thumb_url: constants.attributes.thumb_url,
        can_see_nsfw: constants.attributes.can_see_nsfw,
        created: constants.attributes.created,
        url: constants.attributes.url,
        like_count: constants.attributes.like_count,
        hide_pledges: constants.attributes.hide_pledges,
        social_connections: constants.attributes.social_connections,
    },
    relationships:
    {
        memberships: constants.relationships.memberships,
        campaign: constants.relationships.campaign
    }
};
