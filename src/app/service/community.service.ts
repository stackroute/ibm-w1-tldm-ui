import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';
import {Community} from '../model/community';
import {Observable} from 'rxjs';
import {Channel} from '../model/channel';

const httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class CommunityService {

    communityName = 'Trail';

    constructor(private http: HttpClient, private userService: UserService) {
    }

    private baseUrl = 'http://172.23.239.206:8063/Community-Service/api/v1/community';

    // inviting users to a community
    inviteUsers(userMail: string): Observable<Community> {
        return this.http.post<Community>(this.baseUrl + '/signup-success/' + userMail, httpOptions);
    }

    // creating a community
    createCommunity(community: Community): Observable<Community> {
        return this.http.post<Community>(this.baseUrl, community, httpOptions);
    }

    // fetching list of all users in community
    getAllCommunityUsers() {
        // we have a dummy community here so therefore fetching list of all users
        return this.userService.getAllUsers();
    }

    updateCommunityByCommunityName(communityName: string, channel: Channel): Observable<Community> {
        return this.http.put<Community>(`${this.baseUrl}/update/${communityName}`, channel, httpOptions);

    }

    setCommunityName(communityName: string) {
        this.communityName = communityName;
    }
}