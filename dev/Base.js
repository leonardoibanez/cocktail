var cocktail = require('../lib/cocktail'),
    Base = function(){};

cocktail.mix(Base, {
	Properties: function() {
		return this.getProperties()
	},
});

module.exports =  Base;