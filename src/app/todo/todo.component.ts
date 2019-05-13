import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  //@Input is like passing in props
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}
}
