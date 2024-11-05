import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string;

  @Output() addTask = new EventEmitter<string>();
 
  addNewTaskClicked() {

    this.addTask.emit(this.userId);
    
  }

  }


