import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  // ! Note that I can merge modules together in import array, and that is why I can put FormsModule there


  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.close.emit();
  }

  private tasksService = inject(TasksService);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.close.emit();
  }
}
