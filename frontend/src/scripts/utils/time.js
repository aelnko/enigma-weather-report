const checkForDayTime = () => {
  const trackUserTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    
    return hours;
  };

  const userHours = Number(trackUserTime());
  
  if (userHours >= 6 && userHours < 23) {
    return 'day';
  }
  return 'night';
};

export default checkForDayTime;
