/**
 * <%= model %> Model
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    }
}(this, function(require) {

    var ko = require('knockout');
    var mapping = require('ko-mapping');
    var Component = require('components/models/Component');

    var <%= model %> = Component.extend({
        init: function(params, componentInfo) {
            mapping.fromJS(params, {}, this);
        }
    });

    /**
     * Checks that all parameters have been provided and are valid.
     *
     * @param {object} params An object of parameters to validate.
     * @returns {boolean} true if valid false otherwise.
     */
    <%= model %>.checkRequiredParams = function(params) {
        var validated = true;
        return validated;
    };

    return <%= model %>;
}));