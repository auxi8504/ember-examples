import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function () {
      var that = this;
      var product = this.store.createRecord('product', {
        name: this.get('name')
      });

      var onSuccess = function(product) {
        that.set('name', '');
        that.transitionToRoute('products');
      };

      var onFail = function() {
        product.deleteRecord();
        // deal with the failure here
      };

      product.save().then(onSuccess, onFail);
    }
  }
});
