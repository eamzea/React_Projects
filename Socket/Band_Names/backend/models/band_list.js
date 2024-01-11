const Band = require('./band');

class BandList {
  constructor() {
    this.bands = [
      new Band('Metallica'),
      new Band('Linkin Park'),
      new Band('Red Hot Chilli Peppers'),
    ];
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  removeBand(id) {
    this.bands = this.bands.filter(band => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  increaseVotes(id) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes++;
      }
      return band;
    });
  }

  changeName(id, nName) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.name = nName;
      }
      return band;
    });
  }
}

module.exports = BandList;
