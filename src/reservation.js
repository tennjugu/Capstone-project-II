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


function createStartDateLabel() {
  const startDateLabel = document.createElement('label');
  startDateLabel.htmlFor = 'start-date';
  startDateLabel.textContent = 'Start Date';

  return startDateLabel;
}

function createStartDateInput() {
  const startDateInput = document.createElement('input');
  startDateInput.type = 'date';
  startDateInput.id = 'start-date';
  startDateInput.required = true;

  return startDateInput;
}

function createEndDateLabel() {
  const endDateLabel = document.createElement('label');
  endDateLabel.htmlFor = 'end-date';
  endDateLabel.textContent = 'End Date';

  return endDateLabel;
}

function createEndDateInput() {
  const endDateInput = document.createElement('input');
  endDateInput.type = 'date';
  endDateInput.id = 'end-date';
  endDateInput.required = true;

  return endDateInput;
}

function createReserveButton() {
  const reserveButton = document.createElement('button');
  reserveButton.type = 'submit';
  reserveButton.className = 'reserve-button';
  reserveButton.textContent = 'Reserve';

  return reserveButton;
}

