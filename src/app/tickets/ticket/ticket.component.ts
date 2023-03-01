import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  ticketHasBeenDeleted : EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectTicket() {
    console.log('onSelectTicket : Listener déclenché');
    this.ticketHasBeenSelected.emit(true);
  }

  // supprimer le ticket
  onDeleteTicket() {
    console.log('deleteTicket : Listener déclenché');
    this.ticketHasBeenDeleted.emit(this.ticket);
  }

  
}
