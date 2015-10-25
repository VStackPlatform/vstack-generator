define([
    'app-lib/models/Addon'
],
function(Addon) {

    var <%= model %> = Addon.extend({
        init: function () {
            this._super('<%= name %>');

            this.enableLiveUpdates();

        }
    });

    return <%= model %>;
});
