function timeUntilNewYear() {
  /**
   * Calculate the Time Difference until Jan 1st of Next Year
   * @return {Object} Difference in Days, Hours, Minutes and Seconds
   */

  const currentDate = new Date();
  const nextYear = currentDate.getFullYear() + 1;
  const newYear = new Date(`Jan 01 ${nextYear}`);

  const diffInTime = newYear.getTime() - currentDate.getTime();

  totalSeconds = Math.floor(diffInTime / 1000);
  totalMinutes = Math.floor(diffInTime / (1000 * 60));
  totalHours = Math.floor(diffInTime / (1000 * 60 * 60));
  totalDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  return {
    days: totalDays,
    hours: totalHours % totalDays,
    minutes: totalMinutes % totalHours,
    seconds: totalSeconds % totalMinutes,
  };
}

function formatTimeDifference(timeDifference) {
  /**
   * Format a Time Difference Transforming to String with
   * two digit format for Hour, Minute and Second
   * @param {Object} timeDifference Object with integer times
   * differences in days, hours, minutes and seconds;
   * @return {Object} Formated differences
   */
  return {
    days: timeDifference.days.toString(),
    hours: timeDifference.hours.toString().padStart(2, "0"),
    minutes: timeDifference.minutes.toString().padStart(2, "0"),
    seconds: timeDifference.seconds.toString().padStart(2, "0"),
  };
}

function addInfo(nodeHtml, span, info) {
  //days[0]?.removeChild(span);
  span.innerHTML = info;
  nodeHtml[0]?.prepend(span);
}

function refreshCount() {
  let diff = formatTimeDifference(timeUntilNewYear());
  addInfo(days, spanD, diff.days);
  addInfo(hours, spanH, diff.hours);
  addInfo(minutes, spanM, diff.minutes);
  addInfo(seconds, spanS, diff.seconds);
}

const days = document.getElementsByClassName("day");
const hours = document.getElementsByClassName("hour");
const minutes = document.getElementsByClassName("minute");
const seconds = document.getElementsByClassName("second");

const spanD = document.createElement("span");
const spanH = document.createElement("span");
const spanM = document.createElement("span");
const spanS = document.createElement("span");

setInterval(refreshCount, 1000);
