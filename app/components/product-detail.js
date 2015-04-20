import Ember from 'ember';
import layout from '../templates/components/product-detail';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'section',
  classNames: ['product-detail'],
  classNameBindings: ['isMouse'],
  imageDisplay: true,

  isMouse: function () {
    return this.get('product.name') === "Mouse";
  }.property('product'),

  actions: {
    toggleImage: function () {
      this.toggleProperty('imageDisplay');
    }
  },
  didInsertElement: function () {
    $("section.product-detail").css('background-color', 'red');
  }
});
