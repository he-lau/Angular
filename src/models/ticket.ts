export enum MAJOR {
  si="SI",
  ge="GE",
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major: MAJOR;
  archived: boolean
}
