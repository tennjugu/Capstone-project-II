function toggleLike(likesDiv, likesCounter) {
  if (likesDiv.classList.contains('liked')) {
    likesCounter.innerHTML = '';
    likesDiv.classList.remove('liked');
  } else {
    likesCounter.innerHTML = 'Like';
    likesDiv.classList.add('liked');
  }
}

export default toggleLike;