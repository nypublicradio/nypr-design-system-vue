import NewsletterSignup from '../src/components/TheNewsletterSignup'

export default {
  title: 'The Newsletter Signup',
  component: NewsletterSignup
}

export const Example = () => ({
  components: { NewsletterSignup },
  template: `
    <div class="sbdocs-large-container">
      <newsletter-signup />
    </div>
  `
})
