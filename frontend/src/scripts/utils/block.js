const blockRegistrationButtonWhenAuthorized = () => {
  const registrationButton = document.querySelector('.registration-button');
  const id = document.querySelector('.header').id;

  if (id === 'authorized') {
    registrationButton.disabled = 'disabled';
  }
};

export default blockRegistrationButtonWhenAuthorized;
