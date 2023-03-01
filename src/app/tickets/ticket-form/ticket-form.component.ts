import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { Student } from '../../../models/student';
import { STUDENTS_MOCKED } from '../../../mocks/students.mock';


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;

  public MAJOR_LIST: string[] = ["SI", "GE"];

  public STUDENT_LIST: Student[] = STUDENTS_MOCKED;

  private selectedStudent: Student = this.STUDENT_LIST[0];

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      // ajout de major sur le formulaire
      major: [''] ,
      student: ['']
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  onStudentChange(studentIndex: number) {
    console.log("Change student: ", studentIndex);
    this.selectedStudent = this.STUDENT_LIST[studentIndex];
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    console.log('New ticket: ', ticketToCreate.student.id);
    ticketToCreate.date = new Date();
    ticketToCreate.student = this.selectedStudent;
    ticketToCreate.archived = false;
    this.ticketService.addTicket(ticketToCreate);
  }

}
