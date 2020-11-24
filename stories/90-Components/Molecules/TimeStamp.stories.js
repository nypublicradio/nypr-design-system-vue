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

  export const noYear = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1="January 28, 1:25PM" />
      </div>`
  })

  export const customSeperator = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1Label="Published:" date1="January 28, 2019 1:25PM" seperator="|" date2="February 1, 2019 10:08AM" date2Label="Updated:" />
      </div>`
  })

  export const justNow = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1Label="Published:" date1="January 28, 2019 1:25PM" date2Label="Updated:" date2="Just Now" />
      </div>`
  })

  export const timeAgo = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1Label="Published:" date1="5 hours ago" />
      </div>`
  })

  export const noLabels = () => ({
    components: {
      TimeStamp
    },
    template: `
      <div class="sbdocs-large-container sbdocs-container-margin">
        <time-stamp date1="January 28, 2019 1:25PM" date2="February 1, 2019 10:08AM" />
      </div>`
  })
