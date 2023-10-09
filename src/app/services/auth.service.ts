import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//auth login
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    
    const body = { username, password };
  
    return this.http.post('https://mean-stack-to-do-ho1ibwbks-sarimalikhans-projects.vercel.app/user/login', body);
  }
  
  isLoggedIn(): boolean {
    // TODO: Implement logic to check if the user is logged in
    return false;
  }
}
