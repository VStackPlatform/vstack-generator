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
    var Binding = require('bindings/models/Binding');

    var <%= model %> = Binding.extend({
        isVirtual: false,
        init: function() {
            this._super();
        },
        /**
         * When the binding is first initiated.
         * valueAccessor is added to this.value if not an object, otherwise it is merged into
         * this object.
         */
        begin: function() {

        },
        /**
         * When the bindings observables are updated.
         */
        update: function() {

        },
        /**
         * Checks that all parameters have been provided and are valid.
         *
         * @param {boolean} outputError Whether add an error to the console
         * @returns {boolean} true if valid false otherwise.
         */
        checkRequiredParams: function(outputError) {
            return this.validate({
                "required": []
            }, outputError);
        }
    });

    return new <%= model %>();
}));