import { BaseType } from "./base_data"
import { Campaign } from "./campaign";
import { User } from "./user";

interface Attributes
{
    currently_entitled_amount_cents?: number;
    email?: string;
    full_name?: string;
    is_follower?: boolean;
    last_charge_date?: Date;
    last_charge_status?: string;
    lifetime_support_cents?: number;
    note?: string;
    patron_status?: string;
    pledge_relationship_start?: Date;
    will_pay_amount_cents?: number;
};

interface Relationships
{
    campaign?: Campaign;
    user?: User;
    //pledge_history?: PledgeHistory;
}

export class Member extends BaseType
{
    attributes!: Attributes;
    relationships!: Relationships;

    public constructor(init?: Partial<Member>)
    {
        super();
        Object.assign(this, init);
    }
}
