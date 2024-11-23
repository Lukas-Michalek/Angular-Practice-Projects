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

  // Note '!' ===> I know that I will always get value! .... 
  // {required: true} ===> If it should for some reason happen that I would not get a defined value (EVEN THOUGH I HAVE SAID I ALWAYS WILL ==> '!') Angular will let me know through error

  //* Here I have make use of Interface so I do not have to Input all different properties, but instead I will Input it as an object and then access every property


    // In order to emit our custom events I need to add @Output decorator
  // * I also need to add type of the value the emitter is going to emit, and as I know it is going to be task.id which is string 
  
  
  
  // @Input({required:true}) 
  @Output() complete = new EventEmitter<string>();
 
  // In order to share an information (task.id so I know which task was completed) with the parent component 'tasks.component'(containing all tasks) I need to emit it through Event Emitter - complete ===> I need to emit the my custom component(task)
  //* Now I can use that in parent component of the task component (tasks component) to listen to that event <app-task (complete)="onCompleteTask($event)" [task]="task"/>
  
  onCompleteTask(){
    this.complete.emit(this.task.id);
  }




}
