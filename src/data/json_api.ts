import { Campaign } from "./campaign"
import { Member } from "./member"
import { User } from "./user"
import { Meta } from "./base_data"

class Root
{
    data!: Array<Campaign | Member | User>;
    included!: Array<User>;
    meta!: Meta;

    public constructor(init?: Partial<Root>)
    {
        Object.assign(this, init);
    }
}

export { Root };
