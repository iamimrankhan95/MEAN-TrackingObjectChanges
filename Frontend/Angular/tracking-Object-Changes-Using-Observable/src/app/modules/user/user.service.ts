import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urls } from 'src/app/shared/helpers/urls.const';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }

  public fetchUserDetailsById(queryParams: Map<string,number>): Observable<any>{
    console.log(queryParams.get(Urls.FETCH_USER_DETAILS_BY_USER_ID));
    return this.http.get(Urls.FETCH_USER_DETAILS_BY_USER_ID + queryParams.get("id"));
  }
  public fetchAllUsersList(): Observable<any>{
    return this.http.get(Urls.FETCH_ALL_USERS);
  }
  public fetchAllStatus(): Observable<any>{
    return this.http.get(Urls.FETCH_ALL_STATUS);
  }

  public changeActiveStatusByUserId(queryParams: Map<string,any>): Observable<any>{
    return this.http.post(Urls.CHANGE_ACTIVE_STATUS,queryParams.get("user"));
  }

}
