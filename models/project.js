var attr = DS.attr;

App.Project = DS.Model.extend({
    name: attr('string'),
    description: attr('string'),
    detail: DS.belongsTo('detail', {embedded: 'always'})
});


App.ProjectAdapter = DS.Adapter.extend({
    findAll: function (store, type) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            resolve([
                {
                    id: "project-id-1",
                    name: "this is a name",
                    description: "this is a description",
                    detail: {
                        id: "detail-id-1",
                        firstExtra: "this is a test",
                        secondExtra: "another test"
                    }
                }
            ]);
        });
    }
});