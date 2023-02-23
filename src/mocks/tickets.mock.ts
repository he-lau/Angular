import { MAJOR, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Exercice 0',
    description: '',
    date: dateToday,
    student: 'Paul',
    major : MAJOR.si,
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: MAJOR.ge,
  },
];
