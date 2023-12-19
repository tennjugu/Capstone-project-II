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

function createDateLabel(forAttribute) {
    const dateLabel = document.createElement('label');
    dateLabel.textContent = forAttribute === 'reservation-start-date' ? 'Start Date' : 'End Date';
    dateLabel.htmlFor = forAttribute;
  
    return dateLabel;
  }