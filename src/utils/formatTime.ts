const formatTime = (time: number) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedHours = hours > 0 ? `${hours.toString().padStart(2, '0')}:` : '';

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
};

export default formatTime;