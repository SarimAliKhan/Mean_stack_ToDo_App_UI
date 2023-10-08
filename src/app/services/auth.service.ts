import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    debugger
    const body = { username, password };
  
    return this.http.post('http://localhost:8000/user/login', body);
  }
  
  isLoggedIn(): boolean {
    // TODO: Implement logic to check if the user is logged in
    return false;
  }
}
