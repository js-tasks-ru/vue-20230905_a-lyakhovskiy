import {createApp, defineComponent} from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение
const App = defineComponent({
  data() {
    return {
      selectedButton: '',
      meetupTitle: '',
    };
  },

  watch: {
    selectedButton: {
      handler() {
        fetchMeetupById(this.selectedButton).then(data => {
          this.meetupTitle = data.title;
        })
      }
    }
  }
  ,

  template:
    `
      <div>
      <label v-for="n in 5 "><input type="radio" :value="n" v-model="selectedButton" name="meetupId"/>
        {{ n }}
      </label>
      <hr/>

      <h3>{{ meetupTitle }}</h3>
      </div>
    `
})

const app = createApp(App);

const vm = app.mount('#app');

window.vm = vm;
