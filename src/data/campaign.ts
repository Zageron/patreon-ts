import { BaseType, IData } from "./base_data"
import { User } from "./user";

interface Attributes
{
    readonly created_at?: string;
    readonly creation_name?: string;
    readonly discord_server_id?: string;
    readonly google_analytics_id?: string;
    readonly has_rss?: boolean;
    readonly has_sent_rss_notify?: boolean;
    readonly image_small_url?: string;
    readonly image_url?: string;
    readonly is_charged_immediately?: boolean;
    readonly is_monthly?: boolean;
    readonly is_nsfw?: boolean;
    readonly main_video_embed?: string;
    readonly main_video_url?: string;
    readonly one_liner?: string;
    readonly patron_count?: number;
    readonly pay_per_name?: string;
    readonly pledge_url?: string;
    readonly published_at?: string;
    readonly rss_artwork_url?: string;
    readonly rss_feed_title?: string;
    readonly show_earnings?: boolean;
    readonly summary?: string;
    readonly thanks_embed?: string;
    readonly thanks_msg?: string;
    readonly thanks_video_url?: string;
    readonly url?: string;
    readonly vanity?: string;
};

interface Relationships
{
    readonly creator?: User;
}

interface CampaignData extends IData
{
    readonly attributes?: Attributes;
    readonly relationships?: Relationships;
}

export class Campaign extends BaseType<Campaign>
{
    readonly data?: CampaignData;
}
