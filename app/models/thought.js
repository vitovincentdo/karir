import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    date: DS.attr('string'),
    thought: DS.attr('string'),
    thumbThought: DS.attr('string')
});
