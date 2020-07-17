import BasicCard from '../src/components/BasicCard'

export default {
  title: 'Basic Card',
  component: BasicCard
}

export const WithAnImage = () => ({
  components: { BasicCard },
  template: `
    <div class="sbdocs-xsmall-container">
      <basic-card
        :has-text-link=true
        title="Weekly Music Roundup: Hachalu Hundessa RIP, Monte, and Jorja Smith"
        title-link="http://www.bing.com"
        image="./assets/Placeholder-Image-1_1.png"
        alt-text="alternative text"
        show="Gig Alerts"
        show-link="http://www.google.com"
        date="1/11/2020"
        duration="30 min"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      />
    </div>
  `
})

export const WithAVideo = () => ({
  components: { BasicCard },
  template: `
    <div class="sbdocs-xsmall-container">
      <basic-card
        title="Title"
        video="https://player.vimeo.com/video/90283590"
        alt-text="alternative text"
        subdescription="subtitle"
        :has-cta="true"
        cta="Click Here"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      />
    </div>
  `
})

export const WithoutAnImage = () => ({
  components: { BasicCard },
  template: `
    <div class="sbdocs-medium-container">
      <basic-card
        has-cta
        title="Weekly Music Roundup: Hachalu Hundessa RIP, Monte, and Jorja Smith"
        title-link="http://www.bing.com"
        date="1/11/2020"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio praesentium quis."
      />
    </div>
  `
})

export const WithoutADescriptionOrDuration = () => ({
  components: { BasicCard },
  template: `
    <div class="sbdocs-xsmall-container">
      <basic-card
        :has-text-link=true
        title="Weekly Music Roundup: Hachalu Hundessa RIP, Monte, and Jorja Smith"
        title-link="http://www.bing.com"
        image="./assets/Placeholder-Image-1_1.png"
        alt-text="alternative text"
        show="Gig Alerts"
        show-link="http://www.google.com"
        date="1/11/2020"
      />
    </div>
  `
})

export const WithoutAnImageOrDescription = () => ({
  components: { BasicCard },
  template: `
    <div class="sbdocs-xsmall-container">
      <basic-card
        has-cta
        title="Weekly Music Roundup: Hachalu Hundessa RIP, Monte, and Jorja Smith"
        title-link="http://www.bing.com"
        date="1/11/2020"
      />
    </div>
  `
})
