import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    maps: service(),
    
    didInsertElement() {
        this._super(...arguments);
        let location = this.get('location');
        let view = this.get('view');
        let mapElement = this.get('maps').getMapElement(location, view);
        this.$('.map-container').append(mapElement);
    }
});
