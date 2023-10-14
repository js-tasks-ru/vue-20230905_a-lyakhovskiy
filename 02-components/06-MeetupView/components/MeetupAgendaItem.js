import {defineComponent} from '../vendor/vue.esm-browser.js';
import {agendaItemIcons, agendaItemDefaultTitles} from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    title() {
      return this.agendaItem.title ? this.agendaItem.title : agendaItemDefaultTitles[this.agendaItem.type]
    }
    ,
    iconType() {
      return agendaItemIcons[this.agendaItem.type]
    }
  }
  ,
  template: `
    <div class="agenda-item">
    <div class="agenda-item__col">
      <img :src="'/assets/icons/icon-'+iconType+'.svg'" class="icon" :alt="iconType"/>
    </div>
    <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ this.agendaItem.endsAt }}</div>
    <div class="agenda-item__col">
      <h3 class="agenda-item__title">{{ title }}</h3>
      <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
        <span>{{ agendaItem.speaker }}</span>
        <span class="agenda-item__dot"></span>
        <span class="agenda-item__lang">{{ agendaItem.language }}</span>
      </p>
      <p>{{ agendaItem.description }}</p>
    </div>
    </div>
  `,
});
