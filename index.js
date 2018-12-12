const formatTime = timeInSeconds => {
  var h = Math.floor(timeInSeconds / 3600);
  var m = Math.floor((timeInSeconds / 60) % 60);
  var s = timeInSeconds % 60;

  if (h > 0 && m > 0 && s > 0) return h + "h " + m + "m " + s + "s";

  if (h > 0 && m > 0) return h + "h " + m + "m";

  if (h > 0 && s > 0) return h + "h " + s + "s";

  if (h > 0) return h + "h";

  if (m > 0 && s > 0) return m + "m " + s + "s";

  if (m > 0) return m + "m";

  return timeInSeconds == undefined ? "0s" : `${timeInSeconds}s`;
};

module.exports = formatTime;
