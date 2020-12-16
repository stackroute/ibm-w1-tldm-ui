import {User} from './user';

export class Channel {
    channelId: string;
    channelName: string;
    channelCreatedBy: string;
    channelDescription: string;
    channelUsers: User[];

    constructor(channelName: string, channelDescription: string, channelUsers: User[], channelCreatedBy: string) {
        this.channelName = channelName;
        this.channelDescription = channelDescription;
        this.channelUsers = channelUsers;
        this.channelCreatedBy = channelCreatedBy;
    }
}
