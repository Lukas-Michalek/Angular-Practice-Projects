import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskContentComponent } from "./new-task-content/new-task-content.component";


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NewTaskContentComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userName!: string;
  @Input({ required: true}) userId!: string;


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


  addNewTask?: string;





  get selectedUserTask() {
    console.log(this.userId)
    
    return this.tasks.filter((task) => task.userId === this.userId);
  }




  onCompleteTask(id: string){
    
    this.tasks = this.tasks.filter((task) => task.id !== id);

  }

  newTaskAdded(id: string){
    console.log(`ID sent after clicking on Add Task is ` + id)
    this.addNewTask = id;
  }

}
