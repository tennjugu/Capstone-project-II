const navLinks = document.getElementsByClassName('nav-link');

function activeBtn(event) {
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].classList.remove('active');
  }

  event.target.classList.add('active');
}

