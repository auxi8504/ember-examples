import Ember from 'ember';

export default Ember.ObjectController.extend({
  init: function () {
    this.set('countries', this.store.find('country'));
  },
  //populate countries dropdown
  actions: {
    save: function () {
      //if ($("#productForm").valid()) {
        var that = this;
        //setting manually the madeIn since I got an issue
        this.get('model').set('madeIn', this.get('country'));

        var onSuccess = function(product) {
          that.transitionToRoute('products');
        };

        var onFail = function() {
          // deal with the failure here
          this.get('model').deleteRecord();
        };

        this.get('model').save().then(onSuccess, onFail);
      //}
    }
  }
});
