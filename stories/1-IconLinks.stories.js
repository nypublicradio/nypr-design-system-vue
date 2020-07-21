import IconLinks from '../src/components/IconLinks'
import IconLinkItem from '../src/components/IconLinkItem'

export default {
  title: 'Icon Links',
  component: IconLinks
}

export const Example = () => ({
  components: { IconLinks, IconLinkItem },
  template: `
    <div class="sbdocs-large-container">
      <icon-links>
        <icon-link-item
          icon="./assets/spotify.svg"
          link="https://www.spotify.com"
          alt-text="spotify"
        />
      </icon-links>
    </div>
  `
})
