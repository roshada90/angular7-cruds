import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  userStore = [
    { username: 'bob@bob.com', password: '123' },
    { username: 'bill@bob.com', password: '123' },
    { username: 'jack@bob.com', password: '123' },
    { username: 'john@bob.com', password: '123' },
  ];
  sessionUsername: string;
  sessionPassword: string;
  login(username: string, password: string) {
    const body = { password, username };
    this.sessionPassword = password;
    this.sessionUsername = username;
    for (var i = 0; i < this.userStore.length; i++) {
      if (
        this.userStore[i].username === username &&
        this.userStore[i].password === password
      ) {
        return this.http.post('http://demo6421328.mockable.io/login', body);
      }
    }

    return this.http.post('http://demo6421328.mockable.io/loginError', body);
  }
  getSessionData() {
    return {
      sessionUsername: this.sessionUsername,
      sessionPassword: this.sessionPassword,
    };
  }
  constructor(private http: HttpClient) {}
}
