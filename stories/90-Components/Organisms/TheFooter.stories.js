import TheFooter from '../../../src/components/TheFooter'
import WnycLogo from '../../../src/components/icons/wnyc/WnycLogo'
import ShareTools from '../../../src/components/ShareTools'
import ShareToolsItem from '../../../src/components/ShareToolsItem'
import JlgreenLogo from '../../../src/components/icons/wnyc/JlgreenLogo'

export default {
  title: 'Components/Organisms/The Footer',
  component: TheFooter
}

export const FooterConfig1 = () => ({
  components: {
    TheFooter,
    WnycLogo,
    ShareTools,
    ShareToolsItem,
    JlgreenLogo
  },
  template: `
    <div class="sbdocs-large-container">
    <the-footer
      slogan="Listener-supported WNYC is the home for independent journalism and courageous conversation on air and online. Broadcasting live from New York City on 93.9 FM and AM 820 and available online and on the go."
      :primaryNav="[
        {
          url: 'http://www.google.com',
          text: 'Primary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 3',
        }
      ]"
      :secondaryNav="[
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
      ]"
      :tertiaryNav="[
        {
          url: 'http://www.google.com',
          text: 'Tertiary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Tertiary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Tertiary Link 3',
        }
      ]"
      subheader1="Subheader 1"
      subheader2="Subheader 2"
    >
      <template v-slot:logo>
        <wnyc-logo />
      </template>
      <template v-slot:leftComponent>
        <p><em>slot for left component</em></p>
      </template>
      <template v-slot:rightComponent>
        <p><em>slot for right component</em></p>
      </template>
      <template v-slot:social>
        <share-tools label="Connect">
          <share-tools-item
            service="facebook"
            username="WNYC"
          />
          <share-tools-item
            service="twitter"
            username="WNYC"
          />
          <share-tools-item
            service="instagram"
            username="WNYC"
          />
          <share-tools-item
            service="youtube"
            username="UCbysmY4hyViQAAYEzOR-uCQ"
          />
        </share-tools>
      </template>
    </the-footer>
    </div>`
})

export const FooterConfig2 = () => ({
  components: {
    TheFooter,
    WnycLogo,
    ShareTools,
    ShareToolsItem
  },
  template: `
    <div class="sbdocs-large-container">
    <the-footer
      slogan="Listener-supported WNYC is the home for independent journalism and courageous conversation on air and online. Broadcasting live from New York City on 93.9 FM and AM 820 and available online and on the go."
      :secondaryNav="[
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
      ]"
      subheader1="Subheader 1"
    >
      <template v-slot:logo>
        <wnyc-logo />
      </template>
    </the-footer>
    </div>`
})

export const FooterConfig3 = () => ({
  components: {
    TheFooter,
    WnycLogo,
    ShareTools,
    ShareToolsItem
  },
  template: `
    <div class="sbdocs-large-container">
    <the-footer
      slogan="Listener-supported WNYC is the home for independent journalism and courageous conversation on air and online. Broadcasting live from New York City on 93.9 FM and AM 820 and available online and on the go."
      :primaryNav="[
        {
          url: 'http://www.google.com',
          text: 'Primary Link 1',
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 2',
        },
        {
          url: 'http://www.google.com',
          text: 'Primary Link 3',
        }
      ]"
    >
      <template v-slot:logo>
        <wnyc-logo />
      </template>
    </the-footer>
    </div>`
})
