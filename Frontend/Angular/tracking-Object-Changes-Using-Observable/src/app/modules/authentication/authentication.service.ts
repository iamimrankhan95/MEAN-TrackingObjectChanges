import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/shared/helpers/urls.const';
import { User } from 'src/app/shared/models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  signedInUser!: User;

  constructor(private httpClient: HttpClient) { }

  getUserSignedIn(user:User): Observable<{ data: User }> {
    return this.httpClient.post<{ data: User }>(`${urls.user.signIn}`,user)
  }

  updateUser(user:User): Observable<{ data: User }> {
    return this.httpClient.put<{ data: User }>(`${urls.user.update}`,user)
  }

  getUserSignedOut(user:User): Observable<{ data: User }> {
    return this.httpClient.put<{ data: User }>(`${urls.user.signOut}`,user)
  }
}
