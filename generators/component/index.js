var generators = require('yeoman-generator');

module.exports = generators.NamedBase.extend({
    createSkeleton: function () {
        this.fs.copyTpl(
            this.templatePath('component/index.js'),
            this.destinationPath('app/components/' + this.name + '/' + this.name + '.js'),
            {
                name: this.name,
                model: this._camelCase(this.name)
            }
        );
        this.fs.copyTpl(
            this.templatePath('component/index.html'),
            this.destinationPath( 'app/components/' + this.name + '/' + this.name + '.html'),
            {}
        );
        this.fs.copyTpl(
            this.templatePath('component/models/index.js'),
            this.destinationPath('app/components/' + this.name + '/models/' + this._camelCase(this.name) + '.js'),
            {
                name: this.name,
                model: this._camelCase(this.name)
            }
        );
    },
    _camelCase: function(name) {
        return ('-' + name).replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    }
});