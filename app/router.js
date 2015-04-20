import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('products', function() {
    this.route('detail', {path:'/:product_id'});
    this.route('new');
    this.route('edit', {path:'edit/:product_id'});
  });
  this.resource('country', function() {});
});

export default Router;
