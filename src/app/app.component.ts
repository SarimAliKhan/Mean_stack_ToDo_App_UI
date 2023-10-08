import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoApp';
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Redirect the user to the login page
    this.router.navigate(['/login']);
    
  }
}


