import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Community} from './community';
import { Observable } from 'rxjs';



const httpOptions = {
  headers:new HttpHeaders({'content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http:HttpClient) { }

  baseUrl:string ='http://localhost:8080/api/v1/community';

  inviteUsers(userMail:string):Observable<Community>
  {
    return this.http.post<Community>(this.baseUrl+'/signup-success/'+ userMail,httpOptions);
  }



}
