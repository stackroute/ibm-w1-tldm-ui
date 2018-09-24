import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Message} from '../model/message';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {UserNotification} from '../model/user-notification';
import {DisplayMessage} from '../model/display-message';
import {Channel} from '../model/channel';
import {ChannelMessage} from '../model/channel-message';
import {ChannelNotification} from '../model/channel-notification';


@Injectable({
    providedIn: 'root'
})
export class MessageService {

    private userServerUrl = 'http://172.23.239.122:8067/user-web-socket';
    private channelServerUrl = 'http://172.23.239.122:8067/channel-web-socket';
    private stompClientUser = null;
    private stompClientChannel = null;

    // incoming message data coming from web-socket being stored in this array.
    messagesArr: Message[] = [];

    // messages fetched from DB being stored in this array.
    messages: Message[] = [];

    // incoming channel-message data coming from web-socket being stored in this array.
    channelMessagesArr: ChannelMessage[];

    // channel-messages fetched from DB being stored in this array.
    channelMessages: ChannelMessage[];

    sender: User;
    receiver: User;

    displayName: boolean;

    // display notification for messages for user.
    userNotification = new UserNotification(false, 'userId');

    // display notification for messages for channel.
    channelNotification = new ChannelNotification(false, 'channelId', 'senderId');

    // setting property for displaying messages to the particular receiver.
    displayMessage = new DisplayMessage(false, 'userId');

    constructor(private http: HttpClient) {
    }

    // establishing web-socket connection for user.
    establishConnectionForUser(userId: string) {
        const socket = new SockJS(this.userServerUrl);
        this.stompClientUser = Stomp.over(socket);
        const that = this;
        this.stompClientUser.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            that.stompClientUser.subscribe(`/topic/response/${userId}`, function (message) {
                that.showGreetingForUser(JSON.parse(message.body));
                console.log(message.body);
            });
        });
    }

    // establishing web-socket connection for channel.
    establishConnectionForChannel(channelList: Channel[]) {
        const socket = new SockJS(this.channelServerUrl);
        this.stompClientChannel = Stomp.over(socket);
        const that = this;
        this.stompClientChannel.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            for (let i = 0; i < channelList.length; i++) {
                that.stompClientChannel.subscribe(`/topic-group/response/${channelList[i].channelId}`, function (message) {
                    that.showGreetingForChannel(JSON.parse(message.body));
                });
            }
        });
    }

    // conversation between sender and receiver
    getAllMessagesBySenderAndReceiver(): Observable<Message[]> {
        return this.http.get<Message[]>(`http://172.23.239.104:8068/api/v1/message/${this.sender.userId}/${this.receiver.userId}`);
    }

    // conversation between a channel
    getAllMessagesByChannelId(channelId: string): Observable<ChannelMessage[]> {
        return this.http.get<ChannelMessage[]>(`http://172.23.239.104:8068/api/v1/channel-message/${channelId}`);
    }

    // called at the time of logout.
    disconnectUser() {
        if (this.stompClientUser !== null) {
            this.stompClientUser.disconnect();
        }
        console.log('User Disconnected');
    }

    // called at the time when the user created a new channel, so that the old connection disconnects for the new one to get established.
    disconnectChannel() {
        if (this.stompClientChannel !== null) {
            this.stompClientChannel.disconnect();
        }
    }

    // incoming messages from user-web-socket
    showGreetingForUser(message) {
        this.userNotification = new UserNotification(true, message.sender.userId);
        this.messagesArr.push(message);
    }

    // incoming messages from channel-web-socket
    showGreetingForChannel(message) {
        this.channelNotification = new ChannelNotification(true, message.channel.channelId, message.sender.userId);
        this.channelMessagesArr.push(message);
    }

    getSender(): User {
        return this.sender;
    }

    setSender(sender: User) {
        this.sender = sender;
    }

    getReceiver(): User {
        return this.receiver;
    }

    setReceiver(receiver: User) {
        this.receiver = receiver;
    }

    // send message to @MessageMapping destination end-point for user.
    sendMessageToUser(message: Message) {
        this.stompClientUser.send('/app/chat', {}, JSON.stringify(message));
    }

    // send message to @MessageMapping destination end-point for channel.
    sendMessageToChannel(channelMessage: ChannelMessage) {
        this.stompClientChannel.send('/app/channel-chat', {}, JSON.stringify(channelMessage));
    }

    // sort messages on time-stamp for user.
    setMessages(messages: Message[]) {
        this.clearMessages();

        messages.sort((message1, message2) => {
            if (message1.timestamp < message2.timestamp) {
                return -1;
            } else if (message1.timestamp > message2.timestamp) {
                return 1;
            } else {
                return 0;
            }
        });

        this.messages = messages;
    }

    // sort messages on time-stamp for channel.
    setChannelMessages(channelMessages: ChannelMessage[]) {
        this.clearMessages();

        channelMessages.sort((message1, message2) => {
            if (message1.timestamp < message2.timestamp) {
                return -1;
            } else if (message1.timestamp > message2.timestamp) {
                return 1;
            } else {
                return 0;
            }
        });

        this.channelMessages = channelMessages;
    }

    // clear all the arrays.
    clearMessages() {
        this.messages = [];
        this.messagesArr = [];
        this.channelMessages = [];
        this.channelMessagesArr = [];
    }

    resetUserNotification() {
        this.userNotification.isActive = false;
    }

    resetChannelNotification() {
        this.channelNotification.isActive = false;
    }

    setDisplayMessage(userId: string) {
        this.displayMessage = new DisplayMessage(true, userId);
    }
}
