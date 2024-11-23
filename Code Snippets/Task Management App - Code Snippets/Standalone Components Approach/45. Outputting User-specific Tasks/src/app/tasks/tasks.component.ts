import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userName!: string;
  @Input({ required: true}) userId!: string;

  //* In order to output data for each user task, I will create an array that will hold all the information

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the features of Angular and how to apply them.',
      dueDate: '2025-12-21',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build First Prototype',
      summary: 'Build a first prototype of online shop website',
      dueDate: '2024-12-21',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare Issue Template',
      summary: 'Prepare the issue templapte that will help outline project issues.',
      dueDate: '2026-11-11',
    }
  ]

  
  //* filter method takes a function as an argument,that will be executed once per array[tasks] and if the output is TRUE (it satisfy the conditions) the that object is added to array

  // Filter through tasks and return the array only those tasks of the array tasks, where userId is the as as userId that was provided to tasks.component.ts from outside.(When user clicks on user.componenet (app-user in app.component.html) => Button with user name ... the user that is clicked is then send through Input to user.component.ts)
  // * It contains id, name and avatar. Through (select) emitter, id is then being emitted to parent component which is app.component where it is stored under selectedUserID

  // tasks.component will use this id and store it in userName (if it exists, if not 'Select User!' is outputted) 
  
  //* ===> <app-tasks [userName]="selectedUser.name" />

  // I then use this userName to filter through the array I have(dummy array for now) and create sub array containing only the objects(tasks) that meets the condition of that userId. 

  //* In other words tasks only for that specified user

  // This subarray is then used in tasks.component.html where through @for is then going through and display the content of that subarray ==> Which contains only the tasks for that current user
  
  
  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

}
