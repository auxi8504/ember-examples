import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'products/new',
  renderTemplate: function() {
    this.render('products/new');
  },
  afterModel: function (product) {
    if (!product.get("name")) {
      product.deleteRecord();
      this.transitionTo('products');
    }
  }
});