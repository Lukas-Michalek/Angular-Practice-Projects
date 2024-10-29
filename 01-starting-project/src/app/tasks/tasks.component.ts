import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  
  //* As I am getting some sort of input that is in component I need to use @Input so I can pass this to tasks.component.html
  
  @Input({required: true}) userName!: string;




}
