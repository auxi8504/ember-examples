import Ember from 'ember';

export default Ember.ObjectController.extend({
  classExample: 'product-name',
  upperCase: function() {
    return this.get('name').toUpperCase();
  }.property('name')
});
