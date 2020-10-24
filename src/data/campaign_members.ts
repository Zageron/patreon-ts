import { BaseType, Meta } from "./base_data"
import { Member } from "./member"

export class CampaignMembers extends BaseType<CampaignMembers>
{
    readonly data?: Member[];
    readonly meta?: Meta;
}
