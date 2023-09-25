import {createApp, defineComponent} from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const App = defineComponent({
    name: 'App',
    data() {
      return {
        num1: 0,
        num2: 0,
        operator: 'sum',
      };
    },
    computed: {
      result() {
        switch (this.operator) {
          case 'sum':
            return this.num1 + this.num2;
          case 'subtract':
            return this.num1 - this.num2;
          case 'multiply':
            return this.num1 * this.num2;
          case 'divide':
            return this.num2 !== 0 ? this.num1 / this.num2 : 'Infinity';
          default:
            return NaN;
        }
      }
    }
  })
;

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;






