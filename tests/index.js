import { utils, validators } from "../dist/weblet-kit.min.js";

window.addEventListener(
	"keyup",
	utils.debounce(() => {
		console.log("Ketik selesai!");
	}, 500)
);

window.addEventListener(
	"scroll",
	utils.throttle(() => {
		console.log("Scroll jalan!");
	}, 1000)
);

console.log(utils.shuffleArray([1, 2, 3, 4, 5]));
