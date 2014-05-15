window.App = Ember.Application.create();

App.Store = DS.Store.extend({
    revision: 1,
    url: 'https://example.org'
});

