function toggleLike(likesDiv, likesCounter) {
  if (likesDiv.classList.contains('liked')) {
    likesDiv.classList.remove('liked');
    likesCounter.innerHTML = '';
  } else {
    likesDiv.classList.add('liked');
    likesCounter.innerHTML = 'Liked';
  }
}

export default toggleLike;