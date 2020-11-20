import TimeStamp from '../../../src/components/TimeStamp'

export default {
  title: 'Components/Molecules/Time Stamp'
  }

export const Default = () => ({
  components: {
    TimeStamp
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <time-stamp date1="January 28, 2019 1:25PM" date2="February 1, 2019 10:08AM" date2Label="Updated:" />
    </div>`
})

export const singleDate = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1="January 28, 2019 1:25PM" />
      </div>`
  })

  export const customSeperator = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1="January 28, 2019 1:25PM" dateSeperator="|" date2="February 1, 2019 10:08AM" date2Label="Updated:" />
      </div>`
  })

  export const noLabel = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1="January 28, 2019 1:25PM" date2="February 1, 2019 10:08AM" />
      </div>`
  })
