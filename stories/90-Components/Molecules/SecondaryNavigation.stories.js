import SecondaryNavigation from '../../../src/components/SecondaryNavigation'

export default {
  title: 'Components/Molecules/Secondary Navigation',
  component: SecondaryNavigation
}

export const Vertical = () => ({
  components: { SecondaryNavigation },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <secondary-navigation :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
        }
      ]" />
    </div>
  `
})

export const Horizontal = () => ({
  components: { SecondaryNavigation },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <secondary-navigation orientation="horizontal" :nav-items="[
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Secondary Link 3',
        }
      ]" />
    </div>
  `
})
