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

  function createNameLabel() {
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'comment-username';
    nameLabel.className = 'comment-username';
    nameLabel.textContent = 'Name';
  
    return nameLabel;
  }

  function createNameLabel() {
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'reservation-username';
    nameLabel.className = 'reservation-username';
    nameLabel.textContent = 'Name';
  
    return nameLabel;
  }

  function createNameInput() {
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'rservation-username';
    nameInput.placeholder = 'name';
    nameInput.required = true;
  
    return nameInput;
  }
 
function createInsightLabel() {
  const insightsLabel = document.createElement('label');
  insightsLabel.htmlFor = 'reservation-insights';
  insightsLabel.className = 'reservation-insights';
  insightsLabel.textContent = 'Insights';

  return insightsLabel;
}

function createReservationInsightTextarea() {
  const reservationInsightsTextarea = document.createElement('textarea');
  reservationInsightsTextarea.id = 'reservation-insights';
  reservationInsightsTextarea.placeholder = 'Your reservation details';
  reservationInsightsTextarea.rows = '6';
  reservationInsightsTextarea.required = true;

  return reservationInsightsTextarea;
}

function createReservationFormButton() {
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'submit-reservation';
  submitButton.textContent = 'Reserve';

  return submitButton;
}

function generateReservationForm() {
  const form = document.createElement('form');
  form.action = '';
  form.className = 'reservation-form scrollcomment';

  const reservationFields = [
    createDateLabel('reservation-start-date'),
    createDateInput('reservation-start-date'),
    createDateLabel('reservation-end-date'),
    createDateInput('reservation-end-date'),
    createNameLabel(),
    createNameInput(),
    createInsightLabel(),
    createInsightTextarea(),
    createReservationFormButton(),
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