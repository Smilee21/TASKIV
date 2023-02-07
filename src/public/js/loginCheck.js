const logOutLink = document.querySelectorAll('.logged-out');
const logInLink = document.querySelectorAll('.logged-in');

console.log(logInLink);
console.log(logOutLink);

export const loginCheck = user => {
  if (user) {
      logOutLink.forEach(link => link.style.display = 'none');
      logInLink.forEach(link => link.style.display = 'block')
  } else {
      logInLink.forEach(link => link.style.display = 'none')
    logOutLink.forEach(link => link.style.display = 'block');


  }
};
