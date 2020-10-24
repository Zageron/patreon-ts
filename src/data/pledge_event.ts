import { BaseType, IData } from "./base_data"
import { User } from "./user";
import { Campaign } from "./campaign";
//import { Tier } from "./tier"

interface Attributes
{
    readonly type?: string;
    readonly date?: Date;
    readonly payment_status?: string;
    readonly tier_title?: string;
    readonly tier_id?: string;
    readonly amount_cents?: number;
    readonly currency_code?: string;
}

interface Relationships
{
    readonly patron?: User;
    readonly campaign?: Campaign;
    //readonly tier: Tier;
}

interface PledgeEventData extends IData
{
    readonly attributes?: Attributes;
    readonly relationships?: Relationships;
}

export enum PledgeEventType
{
    PledgeStart = "pledge_start",
    PledgeUpgrade = "pledge_upgrade",
    PledgeDowngrade = "pledge_downgrade",
    PledgeDelete = "pledge_delete",
    PledgeSubscription = "subscription",
    INVALID = "INVALID",
}

export enum PaymentStatusType
{
    Paid,
    Declined,
    Deleted,
    Pending,
    Refunded,
    Fraud,
    Other,
    INVALID
}

export class PledgeEvent extends BaseType<PledgeEvent>
{
    readonly data?: PledgeEventData;

    public GetType(): PledgeEventType
    {
        const type: string | undefined = this.data?.attributes?.type;
        if (type !== undefined)
        {
            return PledgeEventType[type as keyof typeof PledgeEventType]
        }

        return PledgeEventType.INVALID;
    }

    public GetPaymentStatus(): PaymentStatusType
    {
        const status: string | undefined = this.data?.attributes?.payment_status;
        if (status !== undefined)
        {
            return PaymentStatusType[status as keyof typeof PaymentStatusType]
        }

        return PaymentStatusType.INVALID;
    }
}
