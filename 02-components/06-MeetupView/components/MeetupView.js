import {defineComponent} from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupAgenda from "./MeetupAgenda";
import MeetupAgendaItem from "./MeetupAgendaItem";
import MeetupCover from "./MeetupCover";
import MeetupDescription from "./MeetupDescription";
import MeetupInfo from "./MeetupInfo";

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <!--    {{ meetup }}-->
    <div>
    <!-- meetup cover-->
    <MeetupCover :title="meetup.title" :image="meetup.image"/>

    <UiContainer>
      <div class="meetup">
        <div class="meetup__content">
          <h3>Описание</h3>
          <!-- meetup description -->
          <MeetupDescription :description="meetup.description"/>
          <h3>Программа</h3>
          <!-- meetup agenda -->
          <MeetupAgenda v-if="meetup.agenda.length > 0" :agenda="meetup.agenda"/>
          <UiAlert v-if="meetup.agenda.length === 0 ">Программа пока пуста...</UiAlert>
        </div>
        <div class="meetup__aside">
          <!-- meetup info -->
          <MeetupInfo
            :organizer="meetup.organizer"
            :place="meetup.place"
            :date="meetup.date"
          />
        </div>
      </div>
    </UiContainer>
    </div>`,
});
