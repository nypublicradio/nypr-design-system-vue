import BiographyCard from '../src/components/BiographyCard'

export default {
  title: 'Biography Card',
  component: BiographyCard
}

export const Example = () => ({
  components: { BiographyCard },
  template: `
    <div class="sbdocs-xsmall-container">
      <biography-card
        image="https://placehold.it/768x768"
        alt-text="alternative text"
        name="John Doe 1"
        title="President, Google.com, Seattle"
        link="http://www.google.com"
      >
        <slot>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
          dicta magnam,
          molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
          ipsum odio
          praesentium quis.
        </slot>
      </biography-card>
    </div>
  `
})
