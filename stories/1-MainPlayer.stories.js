import MainPlayer from '../src/components/MainPlayer'
import VButton from '../src/components/VButton'
import PlaySimple from '../src/components/icons/PlaySimple'

export default {
  title: 'Components/Organisms/Main Player',
  component: MainPlayer
}

export const Default = () => ({
  components: { MainPlayer, VButton, PlaySimple },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      time="3:00 PM - 4:00 PM"
    >
      <v-button label="Listen Live">
        <play-simple />
      </v-button>
    </main-player>
  `
})

export const WithoutTitle = () => ({
  components: { MainPlayer, VButton, PlaySimple },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    >
    <v-button label="Listen Live">
      <play-simple />
    </v-button>
    </main-player>
  `
})

export const WithoutDetails = () => ({
  components: { MainPlayer, VButton, PlaySimple },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    >
    <v-button label="Listen Live">
      <play-simple />
    </v-button>
    </main-player>
  `
})

export const WithoutTitleLink = () => ({
  components: { MainPlayer, VButton, PlaySimple },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    >
    <v-button label="Listen Live">
      <play-simple />
    </v-button>
    </main-player>
  `
})

export const WithoutDetailsLink = () => ({
  components: { MainPlayer, VButton, PlaySimple },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    >
    <v-button label="Listen Live">
      <play-simple />
    </v-button>
    </main-player>
  `
})

export const WithoutTime = () => ({
  components: { MainPlayer, VButton, PlaySimple },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
    >
    <v-button label="Listen Live">
      <play-simple />
    </v-button>
    </main-player>
  `
})
