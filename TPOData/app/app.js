require.config({
    paths: {
        bootstrap: "../../Scripts/bootstrap",
        jquery: "../../Scripts/jquery-2.1.4.min",
        sammy: "../../Scripts/sammy-0.7.5.min",
        handlebars: "../../Scripts/handlebars.min",
        sammyjsHandlebars: "../../Scripts/sammy.handlebars"
    },
    shim: {
        bootstrap: { deps: ["jquery"] },
        handlebars: { deps: ["sammy"] }
    }
});
requirejs(["viewmodels/main"], function () {
    debugger;
});
//# sourceMappingURL=app.js.map