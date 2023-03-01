import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
     this.ticketList.push(ticket);
     this.tickets$.next(this.ticketList);
  }

  deleteTicket(ticket:Ticket) {      
    this.ticketList.forEach((element,index)=>{
      if(element==ticket) this.ticketList.splice(index,1);
   });  
    this.tickets$.next(this.ticketList);    
  }

  archiveTicket(ticket: Ticket) {
    this.ticketList.forEach((element, index)=>{      
      if(element == ticket) {
        // maj statut ticket
        ticket.archived = !ticket.archived;
        // maj model
        this.ticketList[index] = ticket;
      }
    });
    // maj observable
    this.tickets$.next(this.ticketList);
    console.log('archive ticket: ', ticket);
  }


}
