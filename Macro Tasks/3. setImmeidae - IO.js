const fs = require("fs");

fs.readFile(__filename, () => {
  function demoTimeout() {
    console.log("Hello from setTimeout()");
  }

  const timeoutObject = setTimeout(demoTimeout, 0);
  // clearTimeout(timeoutObject);

  function demoSetImmediate() {
    console.log("Hello from setImmediate()");
  }

  const immediateObject = setImmediate(demoSetImmediate);
  // clearImmediate(immediateObject);
});
