const switchTheme = () => {
  const currentTheme = document.body.id;
  const themes = ['light', 'dark'];
  const colors = {
    light: '#ffffff',
    dark: '#231f01',
    blue: '#5195fa',
  };

  const getNextTheme = (theme) => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    return themes[nextIndex];
  };
  
  const reverse = (theme) => {
    const headerDiv = document.querySelector('.header');
    const switchButtons = headerDiv.querySelectorAll('button');
    const images = headerDiv.querySelectorAll('img');

    switchButtons.forEach((button) => {
      button.style.backgroundColor = colors[currentTheme];
      if (button.classList.contains('registration-button')) {
        button.style.backgroundColor = colors.blue;
      }
    });

    images.forEach((image) => {
      const [, , , , fileName] = image.src.split('/');
      image.src = `./image/${fileName.replace(currentTheme, theme)}`;
    });

    document.body.style.backgroundColor = colors[theme];
    document.body.id = theme;
  };

  const nextTheme = getNextTheme(currentTheme);
  reverse(nextTheme);
};

export default switchTheme;