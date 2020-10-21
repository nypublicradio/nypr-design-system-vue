import GridExamples from '../src/components/storybook/GridExamples'
import SpacingExamples from '../src/components/storybook/SpacingExamples'
import FontExamples from '../src/components/storybook/FontExamples'

export default {
  title: 'Foundations/Intro'
}

export const Intro = () => ({
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <h1 class="u-space--double--bottom">Welcome to Radial (in Vue), The New York Public Radio Design System</h1>
    </div>
  `
})

export const Fonts = () => ({
  components: { FontExamples },
  template: `
    <font-examples />
  `
})

export const Spacing = () => ({
  components: { SpacingExamples },
  template: `
    <spacing-examples />
  `
})

export const TheGrid = () => ({
  components: { GridExamples },
  template: `
    <grid-examples />
  `
})
