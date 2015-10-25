var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    promptName: function() {
        var done = this.async();
        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Enter your addons name:'
        }, function (answers) {
            this.name = answers.name;
            done();
        }.bind(this));
    },
    promptTitle: function() {
        var done = this.async();
        this.prompt({
            type    : 'input',
            name    : 'title',
            message : 'Enter your addons title:'
        }, function (answers) {
            this.title = answers.title;
            done();
        }.bind(this));
    },
    promptCategory: function() {
        var done = this.async();
        this.prompt({
            type    : 'input',
            name    : 'type',
            message : 'Enter your addons type:'
        }, function (answers) {
            this.type = answers.type;
            done();
        }.bind(this));
    },
    createSkeleton: function () {
        this.fs.copyTpl(
            this.templatePath('addon/index.js'),
            this.destinationPath('app/addons/' + this.name + '/index.js'),
            {
                name: this.name,
                model: this._camelCase(this.name)
            }
        );
        this.fs.copyTpl(
            this.templatePath('addon/index.html'),
            this.destinationPath( 'app/addons/' + this.name + '/index.html'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('addon/config.json'),
            this.destinationPath( 'app/addons/' + this.name + '/config.json'),
            {
                name: this.name,
                model: this.title,
                type: this.type,
                priority: 5
            }
        );
    },
    _camelCase: function(name) {
        return (('-' + name).toLowerCase()).replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    }
});