import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function (product) {
    if (!product.get("name")) {
      product.deleteRecord();
      this.transitionTo('products');
    }
  }
});
