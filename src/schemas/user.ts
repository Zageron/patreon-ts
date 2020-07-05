import { Attributes, Relationships } from "./schema_types";

const constants = {
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

const default_attributes: Attributes =
    [
        constants.attributes.email,
        constants.attributes.is_email_verified,
    ];

const default_relationships: Relationships =
    [
        constants.relationships.memberships,
        constants.relationships.campaign
    ];

export default {
    ...constants,
    default_attributes,
    default_relationships
};
