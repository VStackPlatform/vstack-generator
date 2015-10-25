/**
 * @module <%= name %> Component
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    }
}(this, function(require) {

    var ko = require('knockout');
    var mapping = require('ko-mapping');
    var <%= model %> = require('components/<%= name %>/models/<%= model %>');

    var viewModel = {
        createViewModel: function (params, componentInfo) {
            if (<%= model %>.checkRequiredParams(params)) {
                return new <%= model %>(params, componentInfo);
            } else {
                return false;
            }
        }
    };

    ko.components.register('<%= name %>', {
        viewModel: viewModel,
        template: { require: 'text!components/<%= name %>/<%= name %>.html' }
    });

    return viewModel;
}));