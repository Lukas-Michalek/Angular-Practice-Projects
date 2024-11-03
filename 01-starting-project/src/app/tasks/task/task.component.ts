import { Component, Input } from '@angular/core';


interface Task {

  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate:string

}


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

}
