const isLength = (str, min, max) => str.length >= min && str.length <= max;

const isAlphanumeric = (str) => /^[a-z0-9]+$/i.test(str);

const isAscii = (str) => /^[\x00-\x7F]*$/.test(str);

const validate = (username, password) => {
  const validateUsername = (username) => {
    if (!isAlphanumeric(username)) {
      return 'uAlphanumeric';
    }
  
    if (!isLength(username, 3, 20)) {
      return 'uLength';
    }
    return true;
  };

  const validatePassword = (password) => {
    if (!isLength(password, 8, 20)) {
      return 'pLength';
    }

    if (!isAscii(password)) {
      return 'pAscii';
    }
    return true;
  };

  return {
    username: validateUsername(username),
    password: validatePassword(password),
  };
};

const checkForCorrectData = () => {
  const span = document.querySelector('.forgot');
  if (span) span.remove();
  
  const downField = document.querySelector('.field2');
  const userField = document.querySelector('#user');
  const passwordField = document.querySelector('#password');

  const username = userField.value;
  const password = passwordField.value;

  const validateResult = validate(username, password);

  const createErrorMessage = (message, id) => {
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('forgot');
    errorMessage.setAttribute('id', id);
    errorMessage.innerText = message;
    return errorMessage;
  };

  const removeErrorMessage = (id) => {
    const span = document.querySelector(`#${id}`);
    if (span) {
      span.remove();
    }
  };

  const showError = (errorType, errorMessage) => {
    const field = errorType === 'username' ? userField : passwordField;
    field.style.border = '1px solid #e35050';
    downField.insertAdjacentElement('afterend', createErrorMessage(errorMessage, errorType));
  };

  const removeError = (errorType) => {
    const field = errorType === 'username' ? userField : passwordField;
    field.style.border = '1px solid #ffffff';
    removeErrorMessage(errorType);
  };

  switch (validateResult.username) {
    case 'uAlphanumeric':
      showError('username', 'The username should consist of only letters and numbers');
      break;
    case 'uLength':
      showError('username', 'Username must contain from 3 to 20 characters');
      break;
    default:
      removeError('username');
  }

  switch (validateResult.password) {
    case 'pLength':
      showError('pw', 'Password must contain from 8 to 20 characters');
      break;
    case 'pAscii':
      showError('pw', 'Password should consist of only ASCII characters');
      break;
    default:
      removeError('pw');
  }

  if (validateResult.username === true) {
    userField.style.border = '1px solid #ffffff';
  }

  if (validateResult.password === true) {
    passwordField.style.border = '1px solid #ffffff';
  }
};

export {
  checkForCorrectData,
};
