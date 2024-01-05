let reserveStore = [];

class Reserve {
  constructor(reserveName, startDate, endDate, movieId) {
    this.reserveName = reserveName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.movieId = movieId;
  }
}

function createReserveNameLabel() {
  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'reservation-name';
  nameLabel.textContent = 'Name';

  return nameLabel;
}

function createReserveNameInput() {
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'reservation-name';
  nameInput.placeholder = 'Your name';
  nameInput.required = true;

  return nameInput;
}
