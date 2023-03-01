import { Student } from '../models/student';

export enum MAJOR {
  si="SI",
  ge="GE",
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major: MAJOR;
  archived: boolean
}
