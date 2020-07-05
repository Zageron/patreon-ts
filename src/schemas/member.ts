import { DefaultAttributes, DefaultRelationships } from "./schema_types";

interface MemberAttributes
{
    patron_status?: string;
    is_follower?: string;
    full_name?: string;
    email?: string;
    pledge_relationship_start?: string;
    lifetime_support_cents?: string;
    currently_entitled_amount_cents?: string;
    last_charge_date?: string;
    last_charge_status?: string;
    note?: string;
    will_pay_amount_cents?: string;
};

interface MemberRelationships
{
    address?: string;
    campaign?: string;
    currently_entitled_tiers?: string;
    user?: string;
    pledge_history?: string;
};

class Member
{
    attributes?: MemberAttributes;
    relationships?: MemberRelationships;

    public constructor(init?:Partial<Member>)
    {
        Object.assign(this, init);
    }
}

interface MemberDefault
{
    attributes: MemberAttributes;
    relationships: MemberRelationships;
};

const constants: MemberDefault = {
    attributes: {
        patron_status: 'patron_status',
        is_follower: 'is_follower',
        full_name: 'full_name',
        email: 'email',
        pledge_relationship_start: 'pledge_relationship_start',
        lifetime_support_cents: 'lifetime_support_cents',
        currently_entitled_amount_cents: 'currently_entitled_amount_cents',
        last_charge_date: 'last_charge_date',
        last_charge_status: 'last_charge_status',
        note: 'note',
        will_pay_amount_cents: 'will_pay_amount_cents',
    },
    relationships: {
        address: 'address',
        campaign: 'campaign',
        currently_entitled_tiers: 'currently_entitled_tiers',
        user: 'user',
        pledge_history: 'pledge_history',
    }
};

const default_attributes: DefaultAttributes =
    [
        constants.attributes.full_name as string,
    ];

const default_relationships: DefaultRelationships =
    [
        constants.relationships.user as string,
        constants.relationships.pledge_history as string,
    ];

export {
    constants,
    default_attributes,
    default_relationships
};

export { Member, MemberAttributes, MemberRelationships };
