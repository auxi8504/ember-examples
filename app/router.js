import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('songs', function() {
    this.route('song', {path: '/:song_id'}); //dynamic segment
  });
});

export default Router;
