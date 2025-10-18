import { utils } from "../dist/weblet-kit.min.js";

function expensiveCalc(n: number): number {
	console.log("Calculating...");
	console.log("Calculating...1");
	console.log("Calculating...2");
	console.log("Calculating...3");
	return n * n;
}

const fastCalc = utils.memoize(expensiveCalc);

console.log(fastCalc(5)); // “Calculating...” then 25
console.log(fastCalc(5)); // immediately 25, without “Calculating...”
