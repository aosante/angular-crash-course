import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {HomeComponent} from './home/home.component';
import {CompletedTodosComponent} from './completed-todos/completed-todos.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {path: '', component: HomeComponent},
  {path: 'completed', component: CompletedTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
