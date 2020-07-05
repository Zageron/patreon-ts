import { Attributes, Relationships } from "./schema_types";

const constants = {
    attributes: {
        summary: 'summary',
        creation_name: 'creation_name',
        pay_per_name: 'pay_per_name',
        one_liner: 'one_liner',
        main_video_embed: 'main_video_embed',
        main_video_url: 'main_video_url',
        image_url: 'image_url',
        image_small_url: 'image_small_url',
        thanks_video_url: 'thanks_video_url',
        thanks_embed: 'thanks_embed',
        thanks_msg: 'thanks_msg',
        is_monthly: 'is_monthly',
        has_rss: 'has_rss',
        has_sent_rss_notify: 'has_sent_rss_notify',
        rss_feed_title: 'rss_feed_title',
        rss_artwork_url: 'rss_artwork_url',
        is_nsfw: 'is_nsfw',
        is_charged_immediately: 'is_charged_immediately',
        created_at: 'created_at',
        published_at: 'published_at',
        pledge_url: 'pledge_url',
        patron_count: 'patron_count',
        discord_server_id: 'discord_server_id',
        google_analytics_id: 'google_analytics_id',
        show_earnings: 'show_earnings',
        vanity: 'vanity',
        url: 'url',
    },
    relationships: {
        tiers: 'tiers',
        creator: 'creator',
        benefits: 'benefits',
        goals: 'goals',
        campaign_installations: 'campaign_installations',
    }
};


const default_attributes: Attributes =
    [
        constants.attributes.summary,
        constants.attributes.creation_name,
        constants.attributes.pay_per_name,
        constants.attributes.one_liner,
        constants.attributes.main_video_embed,
        constants.attributes.main_video_url,
        constants.attributes.image_small_url,
        constants.attributes.image_url,
        constants.attributes.thanks_video_url,
        constants.attributes.thanks_embed,
        constants.attributes.thanks_msg,
        constants.attributes.is_monthly,
        constants.attributes.is_nsfw,
        constants.attributes.is_charged_immediately,
        constants.attributes.created_at,
        constants.attributes.published_at,
        constants.attributes.pledge_url,
        constants.attributes.patron_count,
    ];

const default_relationships: Relationships =
    [
        constants.relationships.creator,
        constants.relationships.goals
    ];

export default {
    ...constants,
    default_attributes,
    default_relationships
};
