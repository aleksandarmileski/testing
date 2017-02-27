import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  welcome = '-- not initialized yet --';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.welcome = this.userService.isLoggedIn
      ? 'Welcome, ' + this.userService.user.name
      : 'Please Log in.';
  }
}
