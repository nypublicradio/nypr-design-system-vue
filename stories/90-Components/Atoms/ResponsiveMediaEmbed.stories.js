import MediaEmbed from '../../../src/components/MediaEmbed'

export default {
  title: 'Components/Atoms/Responsive Media Embed'
}

export const Example = () => ({
  components: {
    MediaEmbed
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <media-embed url="https://player.vimeo.com/video/90283590" />
    </div>
  `
})
