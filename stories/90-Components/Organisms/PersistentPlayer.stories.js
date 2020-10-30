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
      description="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      description-link="http://www.bing.com"
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
      image="images/Placeholder-Image-1_1.png"
      title="The Takeaway"
      title-link="http://www.google.com"
      description="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      description-link="http://www.bing.com"
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
      description="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      description-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const LivestreamWithoutdescription = () => ({
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
      description="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      description-link="http://www.bing.com"
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
      description="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      description-link="http://www.bing.com"
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})

export const LivestreamWithoutdescriptionLink = () => ({
  components: { PersistentPlayer },
  template: `
    <persistent-player
      livestream
      station="WNYC 93.9 FM"
      title="The Takeaway"
      title-link="http://www.google.com"
      description="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      file="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
    />
  `
})
