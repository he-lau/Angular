import { MAJOR, Ticket } from '../models/ticket';
import { Student } from '../models/student';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Exercice 0',
    description: '',
    date: dateToday,
    student: {
      id: 1903,
      lastName: 'Johnson',
      firstName: 'Bailey'
    },
    major : MAJOR.si,
    archived:true
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: {
      id: 2374,
      lastName: 'Marx',
      firstName: 'Scruffy'
    },
    major: MAJOR.ge,
    archived:false
  },
];
