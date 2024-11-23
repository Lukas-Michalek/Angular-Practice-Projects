import { Component, Input, EventEmitter, Output } from '@angular/core';

import { type Task } from './task.model'


// interface Task {

//   id: string,
//   userId: string,
//   title: string,
//   summary: string,
//   dueDate:string
// }

//* Same as I did with user, It is good practice to 'outsource' Task model as well.


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task; 

  @Output() complete = new EventEmitter<string>();
 
  
  onCompleteTask(){
    this.complete.emit(this.task.id);
  }




}
