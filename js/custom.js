var daysText = document.getElementById("days");
var hoursText = document.getElementById("hours");
var minutesText = document.getElementById("minutes");
var secondsText = document.getElementById("seconds");

var targetDate = new Date(2015, 02, 02);

function updateText() {
  var timespan = countdown(targetDate);
  var months = timespan['months'];
  var days = timespan['days'];
  if (months == 1) {
    days += 31; // Hardcoded 31 value for January
  }
  var hours = timespan['hours'];
  var minutes = timespan['minutes'];
  var seconds = timespan['seconds'];
  daysText.innerHTML = days;
  hoursText.innerHTML = hours;
  minutesText.innerHTML = minutes;
  secondsText.innerHTML = seconds;
}

updateText();

setInterval(function(){
  updateText()
}, 1000);
