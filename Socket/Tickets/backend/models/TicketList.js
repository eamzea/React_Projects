const Ticket = require('./Ticket');

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pending = [];
    this.ticketsAssigned = [];
  }

  get NextNumber() {
    return this.lastNumber++;
  }

  get Last13() {
    return this.ticketsAssigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.NextNumber);
    this.pending.push(newTicket);
    return newTicket;
  }

  assignTicket(agent, desk) {
    if (this.pending.length === 0) {
      return null;
    }

    const nextTicket = this.pending.shift();
    nextTicket.agent = agent;
    nextTicket.desk = desk;

    this.ticketsAssigned.unshift(nextTicket);

    return nextTicket;
  }
}

module.exports = TicketList;
