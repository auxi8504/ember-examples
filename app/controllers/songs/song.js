import Ember from 'ember';

export default Ember.ObjectController.extend({
  lyricsLength: function () {
    return this.get('lyrics').length;
  }.property('lyrics')
});
