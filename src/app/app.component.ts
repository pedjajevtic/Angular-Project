import { Component } from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin = false;
  constructor(private router: Router) {
    this.isAdmin = localStorage.getItem('isAdmin') === "1" ? true : false;
  };
}
