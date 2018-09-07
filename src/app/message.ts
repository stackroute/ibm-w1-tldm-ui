import {User} from './user';

export class Message {
    id: string;
    messageContent: string;
    sender: User;
    receiver: User;
    createdAt: Date;

    constructor(sender: User, receiver: User, message: string) {
        this.sender = sender;
        this.receiver = receiver;
        this.messageContent = message;
    }
}