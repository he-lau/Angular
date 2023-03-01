import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TicketComponent, TicketFormComponent, TicketListComponent} from './tickets';
import {TicketService} from '../services/ticket/ticket.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {HttpClientModule} from '@angular/common/http';

import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';

import {AppRoutingModuleModule} from './app-routing-module.module';


@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent // All the components needs to be declared
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModuleModule
  ],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {
}
