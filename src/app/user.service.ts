import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  isLoggedIn: boolean = true;
  user = {name: 'Sam Spade'};

  constructor() {
  }

}
