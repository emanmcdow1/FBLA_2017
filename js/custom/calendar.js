/*Calendar Buttons*************************************************************/
// get the clock
var may = document.getElementById("may");
var june = document.getElementById("june");
var july = document.getElementById("july");
may.style.display = 'block';
june.style.display = 'none';
july.style.display = 'none';


function calM() {
  // get the current value of the clock's display property
  var displaySetting = may.style.display;

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'none') {
    may.style.display = 'block';
    june.style.display = 'none';
    july.style.display = 'none';
  }
}
function calJn() {

  // get the current value of the clock's display property
  var displaySetting = june.style.display;

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'none') {
    may.style.display = 'none';
    june.style.display = 'block';
    july.style.display = 'none';
  }
}
function calJl() {

  // get the current value of the clock's display property
  var displaySetting = july.style.display;

  // now toggle the clock and the button text, depending on current state
  if (displaySetting == 'none') {
    may.style.display = 'none';
    june.style.display = 'none';
    july.style.display = 'block';
  }
}
/*Calendar Buttons*************************************************************/
