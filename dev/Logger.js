var cocktail = require('../lib/cocktail');

cocktail.mix({
    '@annotation': 'logger',
    '@exports'   : module,

    _parameter: undefined,

    setParameter: function(parameter) {
        this._parameter = parameter;
    },

    process: function(subject, options) {
        var logger = this._parameter,
            host   = subject.prototype || subject;

        host.log = function(){
            logger.log.apply(logger, arguments);
        };
    }

});