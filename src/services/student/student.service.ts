import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { BehaviorSubject } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentList: Student[] = STUDENTS_MOCKED;

  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

  public studentUrl: string = "https://api.myjson.com/bins/ck44c";


  constructor(private http: HttpClient) {
  }

  //getStudents(): BehaviorSubject<Student[]> {
  //  return this.http.get<Student[]>(this.studentUrl);
  //}

  addStudent(student: Student) {
    var addList = this.studentList;
    addList.push(student);
    this.studentList = addList;
    this.students$.next(addList);

  }

  deleteStudent(student: Student) {
    var listUpdate = this.studentList.filter(function stud(studs: Student) {
      return studs != student;
    });
    this.studentList = listUpdate;
    this.students$.next(listUpdate);
  }
}