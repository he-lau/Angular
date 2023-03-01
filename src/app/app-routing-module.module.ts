import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TicketListComponent} from './tickets/ticket-list';
import {StudentListComponent} from './students/student-list/student-list.component';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: 'tickets', component: TicketListComponent},
  {path: 'students', component: StudentListComponent},
];
@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
  }

)
export class AppRoutingModuleModule { }
