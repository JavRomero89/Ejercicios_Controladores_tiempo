let counter = 0;
let interval1 = setInterval(function() {
  if(counter >= 10) {
    clearInterval(interval1);
  } else {
    counter += 1;
  }
}, 2000);

let interval2 = setInterval(function() {
  if(counter >= 10) {
    clearInterval(interval2);
  } else {
    console.log(counter);
  }
}, 5000);
