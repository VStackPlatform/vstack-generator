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
    var Component = require('components/models/Component');

    var <%= model %> = Component.extend({
        init: function(params, componentInfo) {
            this._super();
            this.defaults = {};
            this.mapData(params, {}, this.defaults);
        }
    });

    /**
     * Checks that all parameters have been provided and are valid.
     *
     * @param {object} params An object of parameters to validate.
     * @returns {boolean} true if valid false otherwise.
     */
    <%= model %>.checkRequiredParams = function(params) {
        return Component.validate({
            "required": []
        }, params, '<%= name %>');
    };

    return <%= model %>;
}));