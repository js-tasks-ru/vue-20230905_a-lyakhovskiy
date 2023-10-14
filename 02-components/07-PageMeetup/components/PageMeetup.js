import {defineComponent} from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupDescription from "../../02-MeetupDescription/components/MeetupDescription";
import MeetupCover from "../../03-MeetupCover/components/MeetupCover";
import MeetupInfo from "../../04-MeetupInfo/components/MeetupInfo";
import MeetupAgendaItem from "../../05-MeetupAgenda/components/MeetupAgendaItem";
import MeetupAgenda from "../../05-MeetupAgenda/components/MeetupAgenda";
import MeetupView from "../../06-MeetupView/components/MeetupView";
import {fetchMeetupById} from "../meetupService";

export default defineComponent({
  name: 'PageMeetup',
  methods: {fetchMeetupById},

  data() {
    return {
      meetup: Object,
      loading: false,
      error: false
    };
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgendaItem,
    MeetupAgenda,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  watch: {
    meetupId: {
      async handler() {
        this.loading = true
        try {
          this.error = null
          this.meetup = await fetchMeetupById(this.meetupId)
        } catch (err) {
          this.error = err.message
        }
        this.loading = false
      }
    },
  },

  async mounted() {
    this.loading = true
    try {
      this.error = null
      this.meetup = await fetchMeetupById(this.meetupId)
    } catch (err) {
      this.error = err.message
    }
    this.loading = false
  },

  template: `
    <div class="page-meetup">
    <!-- meetup view -->
    <MeetupView v-if="meetup.id && !error && !loading" :meetup="meetup"/>
    <UiContainer v-if="loading">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>
    <UiContainer v-if="error">
      <UiAlert>{{ error }}</UiAlert>
    </UiContainer>
    </div>
  `,
});
