define(["require", "exports", "modules/ui"], function (require, exports, ui) {
    var main = (function () {
        function main() {
        }
        main.prototype.doStuff = function () {
            alert("Test");
        };
        return main;
    })();
    var app = ui.sammyjs("#main", function () {
        this.use('Handlebars', 'hb');
        this.get('#/hello/:name', function () {
            // set local vars
            this.title = 'Hello!';
            this.name = this.params.name;
            // render the template and pass it through handlebars
            var x = this.partial('app/views/mytemplate.hb');
        });
        this.get('#/byebye/:name', function () {
            // set local vars
            this.title = 'Bye bye!';
            this.name = this.params.name;
            // render the template and pass it through handlebars
            var x = this.partial('app/views/mytemplate2.hb');
        });
    });
    app.run("#/hello/sweetie");
    return main;
});
//# sourceMappingURL=main.js.map