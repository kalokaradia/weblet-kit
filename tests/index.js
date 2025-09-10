import wk from "../dist/weblet-kit.min.mjs";

const logScroll = wk.utils.throttle(() => {
	console.log("Scrolled:", Date.now());
}, 1000);

window.addEventListener("scroll", logScroll);

const search = wk.utils.debounce((query) => {
	console.log("Searching:", query);
}, 2000);

search("h");
search("he");
search("hel");
search("hell");
search("hello");

// Output (setelah 500ms terakhir): "Searching: hello"

// Kalau kamu scroll terus, log muncul tiap 1 detik, bukan setiap pixel.

const input = `<div class="bad">Oke & "quote"</div>`;
console.log(wk.utils.escapeHTML(input));
// output: "&lt;div class=&quot;bad&quot;&gt;Oke &amp; &quot;quote&quot;&lt;/div&gt;"
