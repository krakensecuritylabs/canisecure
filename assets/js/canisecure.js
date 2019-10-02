---
layout: null
---
{% include_relative _search.js %}

class canisecure {

	constructor() {
		this.search = new Search();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	window['canisecure'] = new canisecure();
});
