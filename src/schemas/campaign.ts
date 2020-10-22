import { DefaultAttributes, DefaultRelationships } from "./schema_types";

interface CampaignAttributes
{
    created_at?: string;
    creation_name?: string;
    discord_server_id?: string;
    google_analytics_id?: string;
    has_rss?: string;
    has_sent_rss_notify?: string;
    image_small_url?: string;
    image_url?: string;
    is_charged_immediately?: string;
    is_monthly?: string;
    is_nsfw?: string;
    main_video_embed?: string;
    main_video_url?: string;
    one_liner?: string;
    patron_count?: string;
    pay_per_name?: string;
    pledge_url?: string;
    published_at?: string;
    rss_artwork_url?: string;
    rss_feed_title?: string;
    show_earnings?: string;
    summary?: string;
    thanks_embed?: string;
    thanks_msg?: string;
    thanks_video_url?: string;
    url?: string;
    vanity?: string;
};

interface CampaignRelationships
{
    benefits?: string;
    campaign_installations?: string;
    creator?: string;
    goals?: string;
    tiers?: string;
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
        created_at: 'created_at',
        creation_name: 'creation_name',
        discord_server_id: 'discord_server_id',
        google_analytics_id: 'google_analytics_id',
        has_rss: 'has_rss',
        has_sent_rss_notify: 'has_sent_rss_notify',
        image_small_url: 'image_small_url',
        image_url: 'image_url',
        is_charged_immediately: 'is_charged_immediately',
        is_monthly: 'is_monthly',
        is_nsfw: 'is_nsfw',
        main_video_embed: 'main_video_embed',
        main_video_url: 'main_video_url',
        one_liner: 'one_liner',
        patron_count: 'patron_count',
        pay_per_name: 'pay_per_name',
        pledge_url: 'pledge_url',
        published_at: 'published_at',
        rss_artwork_url: 'rss_artwork_url',
        rss_feed_title: 'rss_feed_title',
        show_earnings: 'show_earnings',
        summary: 'summary',
        thanks_embed: 'thanks_embed',
        thanks_msg: 'thanks_msg',
        thanks_video_url: 'thanks_video_url',
        url: 'url',
        vanity: 'vanity',
    },
    relationships: {
        benefits: 'benefits',
        campaign_installations: 'campaign_installations',
        creator: 'creator',
        goals: 'goals',
        tiers: 'tiers',
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
