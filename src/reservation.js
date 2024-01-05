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

function generateReservationForm() {
  const form = document.createElement('form');
  form.action = '';
  form.className = 'reservation-form';

  const reservationFields = [
    createReserveNameLabel(),
    createReserveNameInput(),
    createStartDateLabel(),
    createStartDateInput(),
    createEndDateLabel(),
    createEndDateInput(),
    createReserveButton(),
  ];

  for (let i = 0; i < reservationFields.length; i += 1) {
    form.appendChild(reservationFields[i]);
  }
  return form;
}

function createReservationLogs() {
  const reservationLogSection = document.createElement('div');
  reservationLogSection.className = 'reservation-log-section';
  reservationLogSection.id = 'reservation-log-section';

  const reservationHeader = document.createElement('h2');
  reservationHeader.className = 'reservation-header';
  reservationHeader.textContent = 'Reservations';

  const reservationRecords = document.createElement('div');
  reservationRecords.className = 'reservation-records';

  reservationLogSection.appendChild(reservationHeader);
  reservationLogSection.appendChild(reservationRecords);

  return reservationLogSection;
}

function addReserve(movieId) {
  const reservationRecords = document.querySelector('.reservation-records');
  reservationRecords.innerHTML = '';
  const filteredReserve = reserveStore.filter((obj) => obj.movieId === movieId);

  for (let i = 0; i < filteredReserve.length; i += 1) {
    const eachReservation = filteredReserve[i];
    const reservationRecords = document.querySelector('.reservation-records');
    reservationRecords.innerHTML = '';
    const eachReserve = document.createElement('p');
    eachReserve.className = 'new-reserve-record';
    eachReserve.textContent = `${eachReservation.reserveName}: ${eachReservation.startDate} to ${eachReservation.endDate}`;
    reservationRecords.appendChild(eachReserve);
  }
}

function createReserveLocalStore() {
  localStorage.setItem('reserveStore', JSON.stringify(reserveStore));
}

function retrieveReserveLocalStore() {
  l
  const storedReserves = JSON.parse(localStorage.getItem('reserveStore'));
  reserveStore = storedReserves || [];
}

function addReserveToReservation() {

  const reserveName = document.querySelector('#reservation-name').value;
  const startDate = document.querySelector('#start-date').value;
  const endDate = document.querySelector('#end-date').value;
  const movieId = document.querySelector('.showId').textContent;

  const newReserveEntry = new Reserve(reserveName, startDate, endDate, movieId);
  reserveStore.push(newReserveEntry);
  addReserve(movieId);
  createReserveLocalStore();
}