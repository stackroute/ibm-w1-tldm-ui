import {User} from './user';
import {Channel} from './channel';

export class Community {
    communityId: string;
    communityName: string;
    communityCreatedDate: Date;
    communityCreatedBy: User;
    channelsList: Channel[];
    communityUsers: User[];
}