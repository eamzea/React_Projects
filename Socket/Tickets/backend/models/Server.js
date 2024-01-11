const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const Socket = require('./Socket');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = socketIO(this.server);
    this.sockets = new Socket(this.io);
  }

  middlewares() {
    this.app.use(express.static(path.resolve('public')));
    this.app.use(cors());
    this.app.get('/last-tickets', (req, res) =>
      res.json({
        ok: true,
        status: 200,
        data: this.sockets.ticketList.Last13,
      })
    );
  }

  initialize() {
    this.middlewares();

    this.server.listen(this.PORT || 4000, () => {
      console.log(chalk.blue(`Server running on PORT : ${this.PORT} 🚀`));
    });
  }
}

module.exports = Server;
