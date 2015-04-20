import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  description: DS.attr('string'),
  available: DS.attr('boolean'),
  madeIn: DS.belongsTo('country', {async: true}),
});
