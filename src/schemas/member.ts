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

class MemberSchema
{
    attributes?: MemberAttributes;
    relationships?: MemberRelationships;

    public constructor(init?:Partial<MemberSchema>)
    {
        Object.assign(this, init);
    }
}

interface MemberDefaults
{
    attributes: MemberAttributes;
    relationships: MemberRelationships;
};

const constants: MemberDefaults = {
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

const complete_schema: MemberSchema =
{
    attributes:
    {
        patron_status: constants.attributes.patron_status,
        currently_entitled_amount_cents: constants.attributes.currently_entitled_amount_cents,
        email: constants.attributes.email,
        is_follower: constants.attributes.is_follower,
        full_name: constants.attributes.full_name,
        last_charge_status: constants.attributes.last_charge_status,
        lifetime_support_cents: constants.attributes.lifetime_support_cents,
        note: constants.attributes.note,
        last_charge_date: constants.attributes.last_charge_date,
        will_pay_amount_cents: constants.attributes.will_pay_amount_cents,
        pledge_relationship_start: constants.attributes.pledge_relationship_start,
    },
    relationships:
    {
        user: constants.relationships.user,
        pledge_history: constants.relationships.pledge_history,
        address: constants.relationships.pledge_history,
        campaign: constants.relationships.pledge_history,
        currently_entitled_tiers: constants.relationships.pledge_history,
    }
}

export {
    constants,
    default_attributes,
    default_relationships,
    complete_schema,
};

export { MemberSchema, MemberAttributes, MemberRelationships };
