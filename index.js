const formatTime = timeInSeconds => {
  var h = Math.floor(timeInSeconds / 3600);
  var m = Math.floor((timeInSeconds / 60) % 60);
  var s = timeInSeconds % 60;

  const time = [];

  if (h > 0) time.push(`${h}h`);

  if (m > 0) time.push(`${m}m`);

  if (s > 0) time.push(`${s}s`);

  return timeInSeconds == undefined ? "0s" : time.join(" ");
};

module.exports = formatTime;
