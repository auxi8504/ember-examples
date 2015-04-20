import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteRecord: function(product) {
      var that = this;
      if (confirm("Delete product?")) {
        product.deleteRecord();

        var onSuccess = function(product) {
          that.transitionToRoute('products');
          alert("Product deleted!");
        };

        var onFail = function() {
        };

        product.save().then(onSuccess).catch(onFail);
      }
    }
  }
});
