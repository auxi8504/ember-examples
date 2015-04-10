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
  Create the product model with it's attributes
  A product mock was created (products)
  An adapter was create, using the rest adapter (namespace: api)
  Images were added inside public/assets/images
  Detail route was created, we are passing the model for this route throught the link-to helper
  A controller was created for products/detail route (ember generate controller products/detail)
    classExample defined inside the controller
    Using active route class

  products/new route was generated
  products/new controller was generated (ember generate controller products/new)
    -An action was created inside this controller
    -Product is being saved into the server
    -LOOK AT var that= this
    -LOOK AT that.set('name', '');
  ItemController
*/