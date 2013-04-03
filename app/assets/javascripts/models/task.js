if (typeof Fulcrum == 'undefined') {
  Fulcrum = {};
}

Fulcrum.Task = Backbone.Model.extend({

  name: 'task',

  i18nScope: 'activerecord.attributes.task',

  defaults: {
    done: false
  },

  isDone: function() {
    return this.attributes.done;
  }

});

_.defaults(Fulcrum.Task.prototype, Fulcrum.SharedModelMethods);
