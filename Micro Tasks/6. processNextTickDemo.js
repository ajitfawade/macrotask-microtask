function nextTickCallBack() {
	console.log("Processed in next iteration");
}

function promiseCallBack() {
	console.log("Hello from Promise");
}

Promise.resolve().then(promiseCallBack);

process.nextTick(nextTickCallBack);

console.log("Processed in the first iteration");
