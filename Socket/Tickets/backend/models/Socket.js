const TicketList = require('./TicketList');

class Sockets {
  constructor(io) {
    this.io = io;
    this.ticketList = new TicketList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', socket => {
      console.log(chalk.yellow('Client connected'));

      socket.on('new_ticket', (_, callback) => {
        const newTicket = this.ticketList.createTicket();

        callback(newTicket);
      });

      socket.on('next_ticket', ({ agent, desk }, callback) => {
        const ticket = this.ticketList.assignTicket(agent, desk);
        callback(ticket);

        this.io.emit('assigned_tickets', this.ticketList.Last13);
      });
    });
  }
}

module.exports = Sockets;
