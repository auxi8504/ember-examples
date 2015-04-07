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
- songs and songs/id routes were defined
- TransitionTo songs route (index route)
- Computed properties
- #link-to helper sending the model
- Using models, controllers (array and object) and templates
- setupController method in the controller
- Let's use the REST Adapter
- Using ember-cli mocks
- Command to generate controllers: ember generate controller songs
 - Ember cli generates only objectController
*/