import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    highlight: DS.attr('string'),
    source: DS.attr('string'),
    location: DS.attr('string'),
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),

    fullname: computed('firstname', 'lastname', function() {
        return `${this.get('firstname')} ${this.get('lastname')}`;
    }),

    rating: DS.attr('number'),
    description: DS.attr('string')
});
