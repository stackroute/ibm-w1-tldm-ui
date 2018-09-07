import {Component, OnInit} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

    // private serverUrl = 'http://localhost:8080/gs-guide-websocket';
    private stompClient;

    constructor() {
    }

    ngOnInit() {
    
    const socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        this.stompClient.subscribe('/topic/response', function (message) {
            this.showGreeting(JSON.parse(message.body).content);
        });
    });
    }

    showGreeting(message) {
        $("#greetings").append("<tr><td>" + message + "</td></tr>");
    }
}