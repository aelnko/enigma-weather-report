const blockRegistrationButton = () => {
  const registrationButton = document.querySelector('.user-icon');
  const headerId = document.querySelector('.header').id;
  const registrationId = document.querySelector('.user-icon').id;

  if (headerId === 'authorized') {
    registrationButton.disabled = 'disabled';
  }

  if (registrationId === 'authentication') {
    registrationButton.disabled = 'disabled';
  }
};

export default blockRegistrationButton;
