import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';
import {BehaviorSubject} from 'rxjs';

import { STUDENTS_MOCKED } from '../../mocks/students.mock';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'https://api.myjson.com/bins/ck44c';

  private listStudent: Student[] = STUDENTS_MOCKED;
  
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.listStudent);

  constructor(private http: HttpClient) {
  }

  getStudent() {
    this.http.get<Student[]>(this.url).subscribe(value => {
      this.listStudent = value;
      this.students$.next(this.listStudent);
    });
  }

}