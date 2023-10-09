import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = { username, password };
  
    return this.http.post('https://api-ten-pied.vercel.app/user/login', body);
  }
  
  isLoggedIn(): boolean {
    // TODO: Implement logic to check if the user is logged in
    return false;
  }
}
