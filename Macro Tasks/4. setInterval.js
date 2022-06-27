console.log("Demo of setInterval()");

let count = 0;

const intervalId = setInterval(intervalCallback, 1000);

function intervalCallback() {
  if (count === 5) {
    console.log("clearing the interval after ", count, " seconds");
    clearInterval(intervalId);
  } else {
    ++count;
    console.log("Running setInterval()", count);
  }
}
