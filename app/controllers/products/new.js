import Ember from 'ember';

export default Ember.ObjectController.extend({
  init: function () {
    //populate countries dropdown
    this.set('countries', this.store.find('country'));
  },
  actions: {
    save: function () {
      var that = this;
      //setting manually the madeIn since I got an issue
      this.get('model').set('madeIn', this.get('country'));

      var onSuccess = function(product) {
        this.transitionToRoute('products');
      }.bind(this);

      var onFail = function() {
        // deal with the failure here
        this.get('model').deleteRecord();
      };

      this.get('model').save().then(onSuccess, onFail);
    }
  }
});
