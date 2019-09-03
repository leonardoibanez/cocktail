var cocktail = require('../lib/cocktail');

cocktail.mix({
	'@exports': module,
	'@as': 'class',
	'@properties': {
		numero: {
            type: String,
            length: 50,
            required: true
        },
		fecha: {
            type: Date,
            required: true
        },
		cliente: {
            type: String,
            length: 50,
            required: true
        }
	}
});


