var app = app || {};

  // Todo Model
  // ----------
  // Our basic **Todo** model has `category` and `title` attributes.

app.Todo = Backbone.Model.extend({

  // Default attributes ensure that each todo created has `title` and keys.
  defaults: {
    category: '',
    title: ''
  },

});