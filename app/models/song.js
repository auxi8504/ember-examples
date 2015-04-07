import DS from 'ember-data';

var song = DS.Model.extend({
  name: DS.attr('string'),
  duration: DS.attr('number'),
  lyrics: DS.attr('string')
});

song.reopenClass({
  FIXTURES: [
    {id:1, name: 'Song 1', duration: 30, lyrics: 'la la la la la'},
    {id:2, name: 'Song 2', duration: 35, lyrics: 'ra ra ra ra ra ra'},
    {id:3, name: 'Song 3', duration: 5, lyrics: 'ta ta ta ta-ta-ta ta ta'},
  ]
});
export default song;
