import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: any;
  constructor(private authService: AuthService, private router: Router ,private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  login() {
    
    this.errorMessage = '';
  
    this.authService.login(this.username, this.password).subscribe((data) => {
      
      this.snackBar.open('You have successfully logged in!');
      this.router.navigate(['/todo']);
    }, (error) => {
      this.errorMessage = "invalid password or email";
  
      timer(1500).subscribe(() => {
        this.errorMessage = '';
      });
    });
  }
  
}
