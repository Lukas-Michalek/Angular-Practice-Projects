import { Component, Input, EventEmitter, Output } from '@angular/core';

import { type User } from './user.model';

// import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',

  // standalone: true,
  standalone: false,

  // imports: [CardComponent],
  // * CardComponent needs to be removed from user.component and moved to declaration array as it is also now module-based

  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  userClicked() {
    this.select.emit(this.user.id);
  }
}
