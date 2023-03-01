import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  // liste des tickets branché à l'observable
  public ticketList: Ticket[] = [];
  // etat des tciket affichés dans ticket-list
  public displayTicketArchived: boolean

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }


  ticketHasBeenDeleted(ticketHasBeenDeleted: Ticket) {
  this.ticketService.deleteTicket(ticketHasBeenDeleted);
}

  ticketHasBeenArchived(ticketHasBeenArchived: Ticket) {
    this.ticketService.archiveTicket(ticketHasBeenArchived);
  }

  onArchivedTicketListChange(element) {
    this.displayTicketArchived = !this.displayTicketArchived;
    if (this.displayTicketArchived) {
      element.textContent = "Hide archived ticket";
    } else {
      element.textContent = "Show archived ticket";
    }
    console.log("Archived: ", this.displayTicketArchived);
  }


}
