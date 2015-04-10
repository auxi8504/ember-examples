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
  Component in charge to display custom version of the product detail
  Component using the {{yield}}
  Using tagName inside the component
  Using classNameBindings and a computer property
  Using action toggleImage and imageDisplay property in the controller and the template

*/