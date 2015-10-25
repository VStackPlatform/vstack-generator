var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    notifyUser: function () {
        console.log('Sorry this generator does not have a default install. it only creates templates for binding/components/filters..');
    }
});