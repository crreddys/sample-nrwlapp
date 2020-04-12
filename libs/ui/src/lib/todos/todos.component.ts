import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@sample-nrwlapp/data';

@Component({
  selector: 'sample-nrwlapp-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit(): void {}
}
