import {Injectable} from '@angular/core';
import {Channel} from '../model/channel';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {MessageService} from './message.service';

const httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
};


@Injectable({
    providedIn: 'root'
})
export class ChannelService {
    channelName: string;
    name: string;
    channel: Channel;
    channels: Channel[];
    user: User;

    baseUrl = 'http://172.23.239.233:8065/api/v1/channel';

    constructor(private httpClient: HttpClient,
                private messageService: MessageService) {
    }

    getAllChannels(): Observable<Channel[]> {
        return this.httpClient.get<Channel[]>(this.baseUrl);
    }

    getChannelDetailByChannelName(name: string): Observable<Channel> {
        return this.httpClient.get<Channel>(`${this.baseUrl}/${name}`);
    }

    createChannel(channel: Channel): Observable<Channel> {
        return this.httpClient.post<Channel>(this.baseUrl, channel, httpOptions);
    }


    getAllChannelsByUserName(userName: string): Observable<Channel[]> {
        return this.httpClient.get<Channel[]>(`${this.baseUrl}/users/${userName}`);
    }

    // service method for getting list of channel in which a user is present
    getAllChannelsByUserId(user: User): Observable<Channel[]> {
        return this.httpClient.get<Channel[]>(`${this.baseUrl}/users/${user.userId}`);
    }

    setChannel(channel: Channel) {
        this.channel = channel;
    }

    getChannel(channel: Channel) {
        this.channel = channel;
    }

    setChannels(channels: Channel[]) {
        this.channels = channels;
    }

    getChannels(channels: Channel[]) {
        this.channels = channels;

    }

    fetchChannels() {
        this.getAllChannelsByUserId(this.messageService.sender).subscribe(data => {
            console.log(this.channels = data);
            this.messageService.establishConnectionForChannel(this.channels);
        });
    }
}
