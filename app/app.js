import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

/*
  I ran:
  ember generate view products/new to insert an instance of a view
  bower install --save jquery-validation  (validation plugin)
  Look at implentation added into the new template view
  Handling click event on the view
  Handling click event on the controller
  Using partial on product detail
  Using render on product detail
  Component using didElementInsert hook
*/