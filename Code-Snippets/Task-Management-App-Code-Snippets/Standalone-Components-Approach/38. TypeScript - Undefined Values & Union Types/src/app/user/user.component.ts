
import { Component, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{

  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

// *****     LESSON CONTINUES - 3     **********//

// By using {required: true} I will get an error during development If I would forget to set some of those inputs and therefore, even though I have said that there won`t be an undefined value by using '!' ===> Type 'undefined' is not assignable to type 'string'.ngtsc(2322)

//H Continue to APP.COMPONENTS.TS

  @Output() select = new EventEmitter<string>();




  get imagePath(){
    return 'assets/users/' + this.avatar
  }


  userClicked() {

    this.select.emit(this.id);

    
  }

// logUserNameInUserComponent(){
//   this.userName.emit(this.name);
// }
}




