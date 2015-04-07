import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('song');
  },

  //This is not needed
  setupController: function(controller, model) {
    controller.set('model', model);
    this._super(controller, model);

    //Example sending additional properties to the controller
    controller.set('testVar', 'Sending another property to the controller sds');
  }
});
