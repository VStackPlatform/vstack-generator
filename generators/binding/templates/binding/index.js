/**
 * @module <%= name %> Binding
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    }
}(this, function(require) {

    var ko = require('knockout');
    var mapping = require('ko-mapping');
    var <%= model %> = require('bindings/<%= name %>/models/<%= model %>');

    ko.bindingHandlers.<%= name %> = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var loaded = <%= model %>.loadParams({
                bindingName: '<%= name %>',
                element: element,
                valueAccessor: valueAccessor,
                allBindings: allBindings,
                viewModel: viewModel,
                bindingContext: bindingContext
            });
            if (loaded && <%= model %>.checkRequiredParams(true)) {
                <%= model %>.begin();
            }
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var loaded = <%= model %>.loadParams({
                bindingName: '<%= name %>',
                element: element,
                valueAccessor: valueAccessor,
                allBindings: allBindings,
                viewModel: viewModel,
                bindingContext: bindingContext
            }, false);
            if (loaded && <%= model %>.checkRequiredParams(false)) {
                <%= model %>.update();
            }
        }
    };

    if (<%= model %>.isVirtual) {
        ko.virtualElements.allowedBindings.<%= name %> = true;
    }

    return <%= model %>;
}));