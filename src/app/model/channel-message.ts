import {User} from './user';
import {Channel} from './channel';

export class ChannelMessage {
    messageId: string;
    messageContent: string;
    sender: User;
    channel: Channel;
    timestamp: Date;

    constructor(messageContent: string, sender: User, channel: Channel) {
        this.messageContent = messageContent;
        this.sender = sender;
        this.channel = channel;
    }
}