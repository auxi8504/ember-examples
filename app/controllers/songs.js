import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],//not working with ember-cli,
  longSongCount: function() {
    var longSongs = this.filter(function(song) {
      return song.get('duration') > 25;
    });
    return longSongs.get('length');
  }.property('@each.duration'),

  songsCount: function () {
    return this.get('length');
  }.property('length')

  //Computed alias
  //songsCount: Ember.computed.alias('length')
});
