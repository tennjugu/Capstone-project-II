let commentStore = [];

class Comment {
  constructor(date, name, insight, movieId) {
    this.date = date;
    this.name = name;
    this.insight = insight;
    this.movieId = movieId;
  }
}

function createDateLabel() {
  const commentDateLabel = document.createElement('label');
  commentDateLabel.textContent = 'Date';
  commentDateLabel.htmlFor = 'comment-date';

  return commentDateLabel;
}

function createDateInput() {
  const commentDate = document.createElement('input');
  commentDate.id = 'comment-date';
  commentDate.style.display = 'none';

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  commentDate.value = formattedDate;

  return commentDate;
}

function createNameLabel() {
  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'comment-username';
  nameLabel.className = 'comment-username';
  nameLabel.textContent = 'Name';

  return nameLabel;
}

function createNameInput() {
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'comment-username';
  nameInput.placeholder = 'Your name';
  nameInput.required = true;

  return nameInput;
}

function createInsightLabel() {
  const insightsLabel = document.createElement('label');
  insightsLabel.htmlFor = 'comment-insights';
  insightsLabel.className = 'comment-insights';
  insightsLabel.textContent = 'Insights';

  return insightsLabel;
}

function createInsightTextarea() {
  const insightsTextarea = document.createElement('textarea');
  insightsTextarea.id = 'comment-insights';
  insightsTextarea.placeholder = 'Your insights';
  insightsTextarea.rows = '6';
  insightsTextarea.required = true;

  return insightsTextarea;
}

function createCommentFormButton() {
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'submit-comment';
  submitButton.textContent = 'Comment';

  return submitButton;
}

function generateCommentForm() {
  const form = document.createElement('form');
  form.action = '';
  form.className = 'comment-form scrollcomment';

  const commentFields = [
    createDateLabel(),
    createDateInput(),
    createNameLabel(),
    createNameInput(),
    createInsightLabel(),
    createInsightTextarea(),
    createCommentFormButton(),
  ];

  for (let i = 0; i < commentFields.length; i += 1) {
    form.appendChild(commentFields[i]);
  }

  return form;
}

function createCommentLogs() {
  const commentLogSection = document.createElement('div');
  commentLogSection.className = 'comment-log-section';
  commentLogSection.id = 'comment-log-section';

  const commentHeader = document.createElement('h2');
  commentHeader.className = 'comment-header';
  commentHeader.textContent = 'Comments';

  const commentRecords = document.createElement('div');
  commentRecords.className = 'comment-records';

  commentLogSection.appendChild(commentHeader);
  commentLogSection.appendChild(commentRecords);

  return commentLogSection;
}

function addComment(movieId) {
  const commentRecords = document.querySelector('.comment-records');
  commentRecords.innerHTML = '';
  const filteredComments = commentStore.filter((obj) => obj.movieId === movieId);

  for (let i = 0; i < filteredComments.length; i += 1) {
    const eachComment = filteredComments[i];
    const eachRecord = document.createElement('p');
    eachRecord.className = 'new-record';
    eachRecord.textContent = `${eachComment.date} ${eachComment.name}: ${eachComment.insight}`;
    commentRecords.appendChild(eachRecord);
  }
}

function createCommentLocalStore() {
  localStorage.setItem('commentStore', JSON.stringify(commentStore));
}

function retrieveCommentLocalStore() {
  const storedTasks = JSON.parse(localStorage.getItem('commentStore'));
  commentStore = storedTasks || [];
}

function addCommentToComments() {
  const date = document.querySelector('#comment-date').value;
  const name = document.querySelector('#comment-username').value;
  const insight = document.querySelector('#comment-insights').value;
  const movieId = document.querySelector('.showId').textContent;

  const newCommentEntry = new Comment(date, name, insight, movieId);
  commentStore.push(newCommentEntry);
  addComment(movieId);
  createCommentLocalStore();
}

function initializeComments() {
  retrieveCommentLocalStore();
  const movieId = document.querySelector('.showId').textContent;
  addComment(movieId);
}

export {
  generateCommentForm,
  createCommentLogs,
  addCommentToComments,
  initializeComments,
};

function initializeReservations() {
  retrieveReservationLocalStore();
  const movieId = document.querySelector('.showId').textContent;
  addReservation(movieId);
}

export {
  generateCommentForm,
  createCommentLogs,
  addReservationToReservations,
  initializeReservations,
};