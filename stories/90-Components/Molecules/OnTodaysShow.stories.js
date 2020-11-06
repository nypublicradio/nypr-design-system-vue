import OnTodaysShow from '../../../src/components/OnTodaysShow'

export default {
  title: 'Components/Molecules/On Today\'s Show',
  component: OnTodaysShow
}

export const Default = () => ({
  components: {
    OnTodaysShow
  },
  template: `
    <on-todays-show
      headline="This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre."
      image="http://placehold.it/768x512"
      caption="( AP Photo/Carolyn Kaster )"
    />
  `
})
