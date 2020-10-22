import SpacingExamples from '../src/components/storybook/SpacingExamples'

export default {
  title: 'Components/Atoms/Spacer'
}

export const Spacer = () => ({
  components: {
    SpacingExamples
  },
  template: `
    <spacing-examples />
  `
})
