import MainPlayer from '../src/components/MainPlayer'

export default {
  title: 'Components/Organisms/Main Player',
  component: MainPlayer
}

export const Default = () => ({
  components: { MainPlayer },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      time="3:00 PM - 4:00 PM"
    />
  `
})

export const WithoutTitle = () => ({
  components: { MainPlayer },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    />
  `
})

export const WithoutDetails = () => ({
  components: { MainPlayer },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    />
  `
})

export const WithoutTitleLink = () => ({
  components: { MainPlayer },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    />
  `
})

export const WithoutDetailsLink = () => ({
  components: { MainPlayer },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
      time="3:00 PM - 4:00 PM"
    />
  `
})

export const WithoutTime = () => ({
  components: { MainPlayer },
  template: `
    <main-player
      image="http://placehold.it/175x175"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
    />
  `
})
