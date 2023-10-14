import {defineComponent} from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие

  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    }
  },

  template:
    `
      <button @click="$emit('update:count', count + 1)">{{ count }}</button>
    `,
});
