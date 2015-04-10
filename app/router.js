import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('products', function() {
    this.route('detail', {path:'/:product_id'});
    this.route('new');
  });
});

export default Router;
