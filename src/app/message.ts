import {User} from './user';

export class Message {
    id: string;
    messageContent: string;
    sender: User;
    receiver: User;
    createdAt: Date;
}
