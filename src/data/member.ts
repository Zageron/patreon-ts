import { BaseType, IData } from "./base_data"
import { Campaign } from "./campaign";
import { PledgeEvent } from "./pledge_event";
import { User } from "./user";

interface Attributes
{
    readonly currently_entitled_amount_cents?: number;
    readonly email?: string;
    readonly full_name?: string;
    readonly is_follower?: boolean;
    readonly last_charge_date?: Date;
    readonly last_charge_status?: string;
    readonly lifetime_support_cents?: number;
    readonly note?: string;
    readonly patron_status?: string;
    readonly pledge_relationship_start?: Date;
    readonly will_pay_amount_cents?: number;
};

interface Relationships
{
    //address?: Address
    readonly campaign?: Campaign;
    //currently_entitled_tiers: Tier[]
    readonly user?: User;
    readonly pledge_history?: PledgeEvent[];
}

interface CampaignData extends IData
{
    readonly attributes?: Attributes;
    readonly relationships?: Relationships;
}

export class Member extends BaseType<Member>
{
    public readonly data?: CampaignData;
}
