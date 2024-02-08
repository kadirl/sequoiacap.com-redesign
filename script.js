// Get the checkbox element
const motionSwitch = document.getElementById('motionSwitch');

// Get the spans with text
const text_on = document.querySelectorAll('.switch-text-on')[0];
const text_off = document.querySelectorAll('.switch-text-off')[0];

// Add event listener to the checkbox
motionSwitch.addEventListener('change', function() {
  // Loop through each span with text
  if (motionSwitch.checked) {
    text_on.classList.remove('inactive');
    text_off.classList.add('inactive');
  } else {
    text_on.classList.add('inactive');
    text_off.classList.remove('inactive');
  }

});
