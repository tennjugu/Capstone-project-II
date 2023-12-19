let reservationStore = [];

class Reservation {
  constructor(startDate, endDate, name, insight, movieId) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.name = name;
    this.insight = insight;
    this.movieId = movieId;
  }
}