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
  form.className = 'comment-form';

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

  const commentHeader = document.createElement('h2');
  commentHeader.className = 'comment-header';
  commentHeader.textContent = 'Comments';

  const commentRecords = document.createElement('div');
  commentRecords.className = 'comment-records';

  commentLogSection.appendChild(commentHeader);
  commentLogSection.appendChild(commentRecords);

  return commentLogSection;
}

export {
  generateCommentForm, createCommentLogs,
};
