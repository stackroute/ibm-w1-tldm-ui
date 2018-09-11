import {User} from './user';

export class MessageBody {
    content: string;
    sender: User;
    receiver: User;
    time: string;
}
