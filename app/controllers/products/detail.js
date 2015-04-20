import Ember from 'ember';

export default Ember.Controller.extend({
  classExample: 'product-name',
  actions: {
    test: function() {
      console.warn("Vicente");
    }
  }
});
