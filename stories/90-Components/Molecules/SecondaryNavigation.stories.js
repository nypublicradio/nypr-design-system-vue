import SecondaryNavigation from '../../../src/components/SecondaryNavigation'

export default {
  title: 'Components/Molecules/Secondary Navigation',
  component: SecondaryNavigation
}

export const Vertical = () => ({
  components: { SecondaryNavigation },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <secondary-navigation
      :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1 in a New Window with a really long name',
          newWindow: true
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
          icon: 'EmailIcon'
        }
      ]"
    />
    </div>
  `
})

export const Horizontal = () => ({
  components: { SecondaryNavigation },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <secondary-navigation
      orientation="horizontal"
      :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1 in a New Window',
          newWindow: true
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
          icon: 'EmailIcon'
        }
      ]"
    />
    </div>
  `
})

export const Responsive = () => ({
  components: { SecondaryNavigation },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <secondary-navigation orientation="responsive" :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1 in a New Window',
          newWindow: true
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3'
        }
      ]" />
    </div>
  `
})
