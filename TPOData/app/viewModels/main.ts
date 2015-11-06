import ui = require("modules/ui");

class main {
    public doStuff(): void {
        alert("Test");
    }
}

var app = ui.sammyjs("#main",function () {
    this.use('Handlebars', 'hb');

    this.get('#/hello/:name', function () {
        // set local vars
        this.title = 'Hello!'
        this.name = this.params.name;
        // render the template and pass it through handlebars
        var x = this.partial('app/views/mytemplate.hb');
    });

    this.get('#/byebye/:name', function () {
        // set local vars
        this.title = 'Bye bye!'
        this.name = this.params.name;
        // render the template and pass it through handlebars
        var x = this.partial('app/views/mytemplate2.hb');
    });
});

app.run("#/hello/sweetie");

export = main;
