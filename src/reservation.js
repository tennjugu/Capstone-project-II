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

  function createDateInput(id) {
    const dateInput = document.createElement('input');
    dateInput.id = id;
    dateInput.type = 'date';
    dateInput.style.display = 'none';
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    dateInput.value = formattedDate;
  
    return dateInput;
  }