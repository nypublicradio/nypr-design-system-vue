import PersistentPlayer from '../../../src/components/PersistentPlayer'

export default {
  title: 'Components/Organisms/Persistent Player',
  component: PersistentPlayer
}

export const Default = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      title="The Takeaway"
      station="WNYC 93.9 FM"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const Livestream = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      livestream
      station="WNYC 93.9 FM"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const LivestreamWithoutTitle = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      livestream
      station="WNYC 93.9 FM"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const LivestreamWithoutDetails = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      livestream
      station="WNYC 93.9 FM"
      title="The Takeaway"
      title-link="http://www.google.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const LivestreamWithoutStation = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      livestream
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const LivestreamWithoutTitleLink = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      livestream
      station="WNYC 93.9 FM"
      title="The Takeaway"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      details-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const LivestreamWithoutDetailsLink = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      livestream
      station="WNYC 93.9 FM"
      title="The Takeaway"
      title-link="http://www.google.com"
      details="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})
