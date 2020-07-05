import { DefaultAttributes, DefaultRelationships } from "./schema_types";

interface CampaignAttributes
{
    summary?: string;
    creation_name?: string;
    pay_per_name?: string;
    one_liner?: string;
    main_video_embed?: string;
    main_video_url?: string;
    image_url?: string;
    image_small_url?: string;
    thanks_video_url?: string;
    thanks_embed?: string;
    thanks_msg?: string;
    is_monthly?: string;
    has_rss?: string;
    has_sent_rss_notify?: string;
    rss_feed_title?: string;
    rss_artwork_url?: string;
    is_nsfw?: string;
    is_charged_immediately?: string;
    created_at?: string;
    published_at?: string;
    pledge_url?: string;
    patron_count?: string;
    discord_server_id?: string;
    google_analytics_id?: string;
    show_earnings?: string;
    vanity?: string;
    url?: string;
};

interface CampaignRelationships
{
    tiers?: string;
    creator?: string;
    benefits?: string;
    goals?: string;
    campaign_installations?: string;
};

class Campaign
{
    attributes?: CampaignAttributes;
    relationships?: CampaignRelationships;

    public constructor(init?: Partial<Campaign>)
    {
        Object.assign(this, init);
    }
};

interface CampaignDefaults
{
    attributes: CampaignAttributes;
    relationships: CampaignRelationships;
};

const constants: CampaignDefaults = {
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

const default_attributes: DefaultAttributes =
    [
        constants.attributes.summary as string,
        constants.attributes.creation_name as string,
        constants.attributes.pay_per_name as string,
        constants.attributes.one_liner as string,
        constants.attributes.main_video_embed as string,
        constants.attributes.main_video_url as string,
        constants.attributes.image_small_url as string,
        constants.attributes.image_url as string,
        constants.attributes.thanks_video_url as string,
        constants.attributes.thanks_embed as string,
        constants.attributes.thanks_msg as string,
        constants.attributes.is_monthly as string,
        constants.attributes.is_nsfw as string,
        constants.attributes.is_charged_immediately as string,
        constants.attributes.created_at as string,
        constants.attributes.published_at as string,
        constants.attributes.pledge_url as string,
        constants.attributes.patron_count as string,
    ];

const default_relationships: DefaultRelationships =
    [
        constants.relationships.creator as string,
        constants.relationships.goals as string,
    ];

export
{
    constants,
    default_attributes,
    default_relationships
};

export
{
    Campaign,
    CampaignAttributes,
    CampaignRelationships
};
