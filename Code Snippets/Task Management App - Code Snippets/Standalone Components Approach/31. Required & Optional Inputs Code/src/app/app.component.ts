import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

// ! Import dummy users to app.component so it cen be set from outside of user component and from app component itself
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  // * To get acces to data from DUMMY_USERS I can add a property so I can get access to that from template "templateUrl: './app.component.html'"

  // * This is how to expose DUMMY_USERS data in the template of this component "./app.component.html'"
  users = DUMMY_USERS;

}
