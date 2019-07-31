import Component from '@ember/component';
import { get, set, computed } from 'karir/utils/short';

export default Component.extend({

  tagName: 'section',

  model: null,
  // isLoading: true,

  size: 4,
  index: 0,

  top: computed('model', 'index', {
    get() {
      const model = get(this, 'model');
      const index = get(this, 'index');

      return model ? model.objectAt(index) : {};
    }
  }),

  actions: {

    prev() {
      const size = get(this, 'size') - 1;
      const idx = get(this, 'index') - 1;

      set(this, 'index', idx < 0 ? size : idx);
    },

    next() {
      const size = get(this, 'size') - 1;
      const idx = get(this, 'index') + 1;

      set(this, 'index', idx > size ? 0 : idx);
    },

    jump(idx) {
      set(this, 'index', idx);
    }
  }

});
