
interface CampaignRelationships
{
    address?: string;
    campaign?: string;
    currently_entitled_tiers?: string;
    user?: string;
};

export interface CampaignMembersDefaults
{
    relationships: CampaignRelationships;
};

export class CampaignMembersSchema
{
    attributes?: undefined;
    relationships?: CampaignRelationships;

    public constructor(init?: Partial<CampaignMembersSchema>)
    {
        Object.assign(this, init);
    }
};

// Use these to construct your desired schema. See below.
export const constants: CampaignMembersDefaults = {
    relationships: {
        address: 'address',
        campaign: 'campaign',
        currently_entitled_tiers: 'currently_entitled_tiers',
        user: 'user',
    }
};

// Copy and paste this, modify it to your preference.
export const complete_schema: CampaignMembersSchema = {
    relationships:
    {
        address: constants.relationships.address,
        campaign: constants.relationships.campaign,
        currently_entitled_tiers: constants.relationships.currently_entitled_tiers,
        user: constants.relationships.user,
    }
};
