const blockRegistrationButtonWhenAuthorized = () => {
  const registrationButton = document.querySelector('.user-icon');
  const id = document.querySelector('.header').id;

  if (id === 'authorized') {
    registrationButton.disabled = 'disabled';
  }
};

export default blockRegistrationButtonWhenAuthorized;
