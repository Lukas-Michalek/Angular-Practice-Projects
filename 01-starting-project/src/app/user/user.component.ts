import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// randomIndex generates random number from 0 - DUMMY_USERS.length

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomIndex]

  // Getter to get cleaner use of property binding
  get imagePath () {

    return 'assets/users/' + this.selectedUser.avatar

  }

  // Event Listener for button
  onSelectUser () {
    console.log('Clicked')
  }

}





