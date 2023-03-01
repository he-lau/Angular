import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student/student.service';
import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  // liste etudiant 
  public studentList: Student[] = [];

  constructor(public studentService: StudentService) {     
    this.studentService.students$.subscribe((students) => this.studentList = students);
  }

  ngOnInit() {
    console.log("OnInit");    
    console.log(this.studentService.getStudent());
  }

}
