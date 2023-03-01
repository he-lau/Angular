import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'https://api.myjson.com/bins/ck44c';
  public students$: BehaviorSubject<Student[]>;
  private listStudent: Student[];

  constructor(private http: HttpClient) {
  }

  getStudent() {
    this.http.get<Student[]>(this.url).subscribe(value => {
      this.listStudent = value;
      this.students$.next(this.listStudent);
    });
  }

}