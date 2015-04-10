import Ember from 'ember';

export default Ember.Controller.extend({
  name: 'Juanito',
  product: function () {
    return this.store.createRecord('product', {
      name: this.get('name')
    });
  }.property('model'),

  actions: {
    save: function () {
      var that = this;

      var onSuccess = function(product) {
        //that.set('name', '');
        that.transitionToRoute('products');
      };

      var onFail = function() {
        // deal with the failure here
      };

      this.get('product').save().then(onSuccess, onFail);
    }
  }
});
