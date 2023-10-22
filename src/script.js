var toggleEl = document.getElementsByTagName("input")[0];

function handle(isDark) {
	var addRemove = isDark ? "add" : "remove";

	document.body.classList[addRemove]("bg-dark", "text-light");

	// Specify the style
	Array.from(document.querySelectorAll(".container")).forEach(function (el) {
		el.classList[addRemove]("bg-dark", "text-light");
	});
	Array.from(document.querySelectorAll('[data-dm="btn"]')).forEach(function (
		el
	) {
		el.className = isDark ? "btn btn-lg btn-light" : "btn btn-lg btn-dark";
	});
	Array.from(document.querySelectorAll('[data-dm="btn2"]')).forEach(function (
		el
	) {
		el.className = isDark ? "btn btn-sm btn-secondary" : "btn btn-sm btn-primary";
	});
	Array.from(document.querySelectorAll('.card:not([data-dm^="card"])')).forEach(
		function (el) {
			el.classList[addRemove]("bg-dark", "text-light", "border-secondary");
		}
	);
	Array.from(document.querySelectorAll('[data-dm="card"]')).forEach(function (
		el
	) {
		el.className = isDark ? "bg-dark text-light" : "bg-light text-dark";
	});
	Array.from(document.querySelectorAll('[data-dm="card2"]')).forEach(function (
		el
	) {
		el.className = isDark ? "bg-secondary text-white" : "bg-primary text-white";
	});
}

toggleEl.addEventListener("change", function (event) {
	handle(event.target.checked);
});

handle(toggleEl.checked);
