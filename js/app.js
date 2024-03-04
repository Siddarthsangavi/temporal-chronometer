const endDate = "30 August 2031 11:00 AM";
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end - now;

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Update input values
  inputs[0].value = days;
  inputs[1].value = hours;
  inputs[2].value = minutes;
  inputs[3].value = seconds;
}

// Call the clock function every second to update the countdown timer
setInterval(clock, 1000);
