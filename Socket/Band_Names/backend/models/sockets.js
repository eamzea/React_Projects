const BandList = require('./band_list');

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', socket => {
      console.log(chalk.yellow('Client connected'));

      socket.emit('current_bands', this.bandList.getBands());

      socket.on('vote_band', ({ id }) => {
        this.bandList.increaseVotes(id);

        this.io.emit('current_bands', this.bandList.getBands());
      });

      socket.on('delete_band', ({ id }) => {
        this.bandList.removeBand(id);

        this.io.emit('current_bands', this.bandList.getBands());
      });

      socket.on('change_band', ({ id, name }) => {
        this.bandList.changeName(id, name);

        this.io.emit('current_bands', this.bandList.getBands());
      });

      socket.on('add_band', ({ name }) => {
        this.bandList.addBand(name);
        this.io.emit('current_bands', this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
