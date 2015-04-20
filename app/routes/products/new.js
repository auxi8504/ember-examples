import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('product', {image: 'assets/images/generic.jpeg'});
  },
});
