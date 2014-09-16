requirejs.config({
    paths: {
		jquery : [
			'https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js',
			'lib/jquery-1.11.1.min'
		],
		bootstrap : [
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js',
			'lib/bootstrap-3.2.0.min'
		]
    },
    shim: {
        bootstrap : {
            deps: ['jquery']
        }
    }
});

require(['jquery', 'bootstrap'], function ($) {
    // do nothing
});