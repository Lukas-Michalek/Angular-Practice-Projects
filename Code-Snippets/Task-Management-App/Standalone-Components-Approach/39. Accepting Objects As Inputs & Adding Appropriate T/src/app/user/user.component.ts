
import { Component, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{




  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // * I can simplify this code so that instead of accpeting 3 properties, I will accpet just one proeprty => The entire user object

  @Input({required: true}) user!: {
    id: string;
    avatar: string;
    name: string;
  }; 

  // Remember! By using 'user!' I am convincing TypeScript that value will be defined! And by adding {required: true} will make sure to show an error in IDE in case I would forgot to add value and therefore there will be undefined at the end. This is a safeguard against errors. 



  @Output() select = new EventEmitter<string>();


// Of course by using object type I need to adjust the code accordingly

  get imagePath(){
    // return 'assets/users/' + this.avatar
    return 'assets/users/' + this.user.avatar
  }


  userClicked() {

    // this.select.emit(this.id);
    this.select.emit(this.user.id);

    
  }

}




