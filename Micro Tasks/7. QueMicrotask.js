console.log("queueMicrotask demo");

queueMicrotask(() => {
    console.log("Microtask 1");
    queueMicrotask(() => {
        console.log("Microtask 2");
    });
});