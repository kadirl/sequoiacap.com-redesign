// motion switch thing (unfunctional)

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


// adaptive scaledown

let originalHeight = document.querySelector('.posts').offsetHeight;

function resize() {
  let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var originalWidth = 1360 + 32 + 32;
  // window width / original width = factor
  var scalingFactor = windowWidth / originalWidth;

  if (windowWidth < originalWidth && windowWidth > 960) {
    document.querySelector('.posts').style.transform = 'scale(' + scalingFactor + ')';
    document.querySelector('.posts').style.minHeight = (originalHeight * scalingFactor) + 'px';
    document.querySelector('.posts').style.maxHeight = (originalHeight * scalingFactor) + 'px';
    console.log(originalWidth + ", " + windowWidth + ", " + scalingFactor);
  } else if (windowWidth <= 960) {
    document.querySelector('.posts').removeAttribute("style");
  }
}

window.addEventListener('resize', resize);
document.addEventListener('DOMContentLoaded', resize);


