import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  qualification: attr('string'),
  thumbJob: attr('string'),
  featured: attr('boolean'),
  specialization: attr('string'),
  url: attr('string'),
  location: attr(),
});
