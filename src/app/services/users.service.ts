import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private server: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(body: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.server}/users/auth`, body, { observe: 'response' });
  }

  register(newUser: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.server}/users`, newUser, { observe: 'response' });
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.server}/users`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.server}/users/${user.email}`, user);
  }
}
