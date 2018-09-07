import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
// import {Message} from './Message';



@Injectable({
    providedIn: 'root'
})
export class MessageService {

    private serverUrl = 'http://172.23.239.122:8080/gs-guide-websocket';
    private stompClient = null;
    message: string;


    constructor() {
    }

    establishConnection() {
        const socket = new SockJS(this.serverUrl);
        this.stompClient = Stomp.over(socket);
        const that = this;
        this.stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            that.stompClient.subscribe('/topic/response', function (message) {
                that.showGreeting(JSON.parse(message.body).content);
            });
        });
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log('Disconnected');
    }

    showGreeting(message: string) {
        this.message = message;
    }

    retrieveMessage(): string {
        return this.message;
    }

    sendMessage(message: string) {
        this.stompClient.send('/app/chat', {}, JSON.stringify({'messageContent': message}));
    }
}
