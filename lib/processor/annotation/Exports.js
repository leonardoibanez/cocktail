/*
 *
 * Copyright (c) 2013 - 2016 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var sequence = require('../sequence');

function Exports () {}

Exports.prototype = {
    retain   : false,
    priority : sequence.EXPORTS,
    name     : '@extends',
    _parameter: undefined,


    setParameter: function (value) {
        this._parameter = value;
    },

    getParameter: function () {
        return this._parameter;
    },

    process: function (subject /*, proto*/) {
        var value = this.getParameter();

        if (value && typeof value === 'object') {
            value.exports = subject;
        }
    }
};

module.exports = Exports;
