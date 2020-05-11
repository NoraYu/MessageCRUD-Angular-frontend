import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageEditComponent} from './components/message-edit/message-edit.component';
import {MessageListComponent} from './components/message-list/message-list.component';
import {MessageDetailsComponent} from './components/message-details/message-details.component';


const routes: Routes = [
  {path: 'messages/:id', component: MessageEditComponent},
  {path: 'message-add', component: MessageEditComponent},
  {path: 'message-details/:id', component: MessageDetailsComponent},
  {path: 'messages', component: MessageListComponent},
  {path: '', redirectTo: '/messages', pathMatch: 'full'},
  {path: '**', redirectTo: '/messages', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
