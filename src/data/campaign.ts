import { BaseType } from "./base_data"
import { User } from "./user";

interface Attributes
{
    created_at?: string;
    creation_name?: string;
    discord_server_id?: string;
    google_analytics_id?: string;
    has_rss?: boolean;
    has_sent_rss_notify?: boolean;
    image_small_url?: string;
    image_url?: string;
    is_charged_immediately?: boolean;
    is_monthly?: boolean;
    is_nsfw?: boolean;
    main_video_embed?: string;
    main_video_url?: string;
    one_liner?: string;
    patron_count?: number;
    pay_per_name?: string;
    pledge_url?: string;
    published_at?: string;
    rss_artwork_url?: string;
    rss_feed_title?: string;
    show_earnings?: boolean;
    summary?: string;
    thanks_embed?: string;
    thanks_msg?: string;
    thanks_video_url?: string;
    url?: string;
    vanity?: string;
};

interface Relationships
{
    creator?: User;
}

export class Campaign extends BaseType
{
    attributes!: Attributes;
    relationships!: Relationships;

    public constructor(init?: Partial<Campaign>)
    {
        super();
        Object.assign(this, init);
    }
}
