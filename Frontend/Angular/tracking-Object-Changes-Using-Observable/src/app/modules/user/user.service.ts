import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { urls } from 'src/app/shared/helpers/urls.const';
import { User, Status } from 'src/app/shared/models/user.dto';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // public fetchUserDetailsById(queryParams: Map<string,number>): Observable<any>{
  //   console.log(queryParams.get(Urls.FETCH_USER_DETAILS_BY_USER_ID));
  //   return this.http.get(Urls.FETCH_USER_DETAILS_BY_USER_ID + queryParams.get("id"));
  // }
  readUsersFromServer(): Observable<{ data: User[]; count: number }> {
    return this.httpClient.get<{ data: User[]; count: number }>(`${urls.user.readUsers}`)
  }

  readStatusesFromServer(): Observable<{ data: Status[]; count: number }> {
    return this.httpClient.get<{ data: Status[]; count: number }>(`${urls.status.readStatuses}`)
  }
  // public fetchAllStatus(): Observable<any>{
  //   return this.http.get(Urls.FETCH_ALL_STATUS);
  // }

  // public changeActiveStatusByUserId(queryParams: Map<string,any>): Observable<any>{
  //   return this.http.post(Urls.CHANGE_ACTIVE_STATUS,queryParams.get("user"));
  // }

}
