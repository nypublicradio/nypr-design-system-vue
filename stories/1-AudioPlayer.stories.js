import AudioPlayer from '../src/components/AudioPlayer'

export default {
  title: 'Audio Player',
  component: AudioPlayer
}

export const Default = () => ({
  components: { AudioPlayer },
  template: `
    <audio-player
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
  components: { AudioPlayer },
  template: `
    <audio-player
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
