let reserveStore = [];

class Reserve {
  constructor(reserveName, startDate, endDate, movieId) {
    this.reserveName = reserveName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.movieId = movieId;
  }
}