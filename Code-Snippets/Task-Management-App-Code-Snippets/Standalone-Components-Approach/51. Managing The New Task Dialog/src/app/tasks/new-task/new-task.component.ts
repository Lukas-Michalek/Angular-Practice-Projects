import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  // User clicks on backdrop or Cancel button, event is being emitted that will send no data -> VOID

  @Output() cancel = new EventEmitter<void>();

  onCancel(){

    this.cancel.emit();

  }

}
