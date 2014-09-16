requirejs.config({
    paths: {
		//https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
        "jquery": "lib/jquery-1.11.1.min",
		//https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js
        "bootstrap": "lib/bootstrap-3.2.0.min"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "bootstrap"], function ($) {
    // do nothing
});