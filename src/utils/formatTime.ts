const formatTime = (time: number): string => {
  const milliseconds = ("0" + (Math.floor(time % 1000) / 10).toFixed(0)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const hours = Math.floor(time / 3600000);
  return `${hours > 0 ? hours + ':' : ''}${minutes}:${seconds}.${milliseconds}`;
};

export default formatTime;