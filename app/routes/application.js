import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var myList = [
      {
        title: 'Product 1',
        price: 200
      },
      {
        title: 'Product 2',
        price: 300
      },
      {
        title: 'Product 3',
        price: 400
      }
    ];
    return myList;
  }
});
