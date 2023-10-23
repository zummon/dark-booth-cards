var toggleEl = document.querySelector("#set-dark");

function handle(isDark) {
	document.documentElement.className = isDark ? "dark" : "";
}

toggleEl.addEventListener("change", function (event) {
	handle(event.target.checked);
});

handle(toggleEl.checked);