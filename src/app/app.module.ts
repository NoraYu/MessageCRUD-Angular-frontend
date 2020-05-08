import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageDetailsComponent } from './components/message-details/message-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
const routes: Routes = [
  {path: 'messages/:id', component: MessageDetailsComponent},
  {path: 'messages', component: MessageListComponent},
  {path: '', redirectTo: '/messages', pathMatch: 'full'},
  {path: '**', redirectTo: '/messages', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
