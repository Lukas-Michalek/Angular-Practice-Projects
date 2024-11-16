import { Component, Input, EventEmitter, Output, inject } from '@angular/core';


import { type Task } from './task.model'

import { CardComponent } from '../../shared/card/card.component'

// To be able to use the PIPES I need to import the exact pipe
import { DatePipe } from '@angular/common';

import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task; 
  
  // H *** Removing Tasks - Complete ***
  // * I no longer need to emit task.id to the tasks.component as removing the task is handled in tasks.services intead. So the only thing I need is to inject TaskService method from tasks.serices to tasksService proerty which now holds access to all the methods and 'task database' in the form of tasks array and so all logic will be done there.

  // * Remember to also delete emitter from tasks.component
  // @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);



  onCompleteTask(){
    // this.complete.emit(this.task.id);
    console.log(`Complete Button Clicked`)

    console.log(`this.task.id is => ` + this.task.id)
    this.tasksService.removeTask(this.task.id);
    
  }
}