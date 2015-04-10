import DS from 'ember-data';

var Product = DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
});

Product.reopenClass({
  FIXTURES: [
    {id: 1, title: 'Product 1', price: 200},
    {id: 2, title: 'Product 2', price: 300}
  ]
});

export default Product;