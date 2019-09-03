/*
 *
 * Copyright (c) 2013 - 2016 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var sequence = require('../sequence');

function Properties () {}

Properties.prototype = {
    retain   : false,
    priority : sequence.PROPERTIES,
    name     : '@properties',

    _parameter: undefined,

    setParameter: function (value) {
        if (Object.prototype.toString.call(value) !== '[object Object]') {
             throw new Error('@properties parameter should be an Object');
        }
        this._parameter = value;
    },

    getParameter: function () {
        return this._parameter;
    },

    _capitalizeName: function (name) {
        return (name.charAt(0).toUpperCase() + name.slice(1));
    },

    _getterName: function (property, value) {
        return (value !== false && value !== true ? 'get' : 'is') + this._capitalizeName(property);
    },

    _setterName: function (property) {
        return 'set' + this._capitalizeName(property);
    },
    _createGetProperty: function (subject, properties) {
        subject['getProperties'] = function(){
            return properties;
        };  
    },
    _createPropertyFor: function (subject, name, value, doNotOverride) {
        if (typeof subject[name] === 'undefined' || doNotOverride !== true) {
            subject[name] = value;
        }
        subject[this._getterName(name, value)] = function(){
            return this[name].value;
        };
        subject[this._setterName(name)] = function(set){
            this[name].value = set;
        };
    },

    process: function (subject) {
        var properties = this.getParameter(),
            isObject = !(subject.prototype),
            key;
        this._createGetProperty(subject.prototype, properties)
        for (key in properties) {
            if (properties.hasOwnProperty(key)) {
                this._createPropertyFor(subject.prototype || subject, key, properties[key], isObject);
            }
        }
    }

};

module.exports = Properties;
