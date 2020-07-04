const constants = {
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

export default {
    ...constants,
    default_attributes: [
        constants.attributes.full_name,
    ],
    default_relationships: [
        constants.relationships.user,
        constants.relationships.pledge_history
    ]
};
