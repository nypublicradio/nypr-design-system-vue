import GridExamples from '../src/components/storybook/GridExamples'

export default {
  title: 'Foundations/GridExamples'
}

export const TheGrid = () => ({
  components: { GridExamples },
  template: `
    <grid-examples placeholder="assets/images/Placeholder-Image-1_1.png" />
  `
})
