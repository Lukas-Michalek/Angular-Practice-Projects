import { Component } from '@angular/core';


// No longer need for the component that is not standalone
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  
  
  standalone: false, // In order to use this component in module standalone must be set to false!
  
  //* As this component is not standalone anymore, imports needs to be removed as well as 'imports' is only valid on a component that is standalone.(-992010)
  // imports: [HeaderComponent, UserComponent, TasksComponent],
  
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  users = DUMMY_USERS;

  selectedUserID?: string;

  onSelectUser(id: string) {
    this.selectedUserID = id;
  }

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserID)!;
  }
}
