import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    baseUrl = 'http://172.23.239.122:8070/api/v1/search-users';

    constructor(private httpClient: HttpClient) {
    }

    searchTerm(term: string): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.baseUrl}/${term}`);
    }

}
