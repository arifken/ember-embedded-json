App.Router.map(function () {
    this.resource('project', { path: '/' }, function () {
    });
});

App.ProjectRoute = Ember.Route.extend({
    model: function () {
        return this.store.findAll('project');
    }
});
