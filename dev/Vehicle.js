var cocktail = require('../lib/cocktail'),
	Base   = require('./Base');

cocktail.mix({
	'@exports': module,
	'@as': 'class',
	'@extends': Base,
	'@properties': {
		make: {
            type: String,
            length: 50,
            required: true
        },
		model: {
            type: String,
            length: 50,
            required: true
        },
		year: {
            type: Number,
            length: 4,
            required: true
        }
	},

	constructor: function(make, model, year) {
		this.setMake(make);
		this.setModel(model);
		this.setYear(year);
	},
    isNew: function(){
        if (this.getYear() >= 2018) {
			return 'es nuevo'
		} else {
			return 'no es nuevo'
		}
    }
});
