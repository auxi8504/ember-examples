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
    ember generate resource country
    ember generate http-mock country
    Look at product model
    Look at new route handler
    Validations: https://github.com/dockyard/ember-validations
    ember generate route products/edit
    ember generate controller products
    Look at afterModel hook
    Look at form validation
    IsNew on products template
    ModelFor example
*/