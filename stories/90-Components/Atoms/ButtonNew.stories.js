import VButton from '../../../src/components/VButton'
import AudioIcon from '../../../src/components/icons/AudioIcon'

export default {
  title: 'Components/Atoms/ButtonsNew'
}

export const Buttons = () => ({
  components: {
    VButton
  },
  template: `
    <div class="l-grid l-grid--4up">
    <div>
      <v-button
        href="http://www.google.com"
        class="mod-small"
        label="Small Button"
      />
    </div>
    <div>
      <v-button
        href="http://www.google.com"
        label="Regular Button"
      />
    </div>
    <div>
      <v-button
        href="http://www.google.com"
        class="mod-large"
        label="Large Button"
      />
    </div>
    <div>
      <v-button
        href="http://www.google.com"
        class="mod-large"
        label="Disabled Button"
        disabled
      />
    </div>
    </div>
  `
})

export const ButtonsWithIcons = () => ({
  components: {
    VButton,
    AudioIcon
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <v-button
      href="http://www.google.com"
      class="mod-large"
      label="Button"
    >
      <audio-icon />
    </v-button>
    </div>
  `
})

export const Secondary = () => ({
  components: {
    VButton
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <v-button
      href="http://www.google.com"
      class="mod-secondary"
      label="Button"
    />
    </div>`
})

export const IconButtons = () => ({
  components: {
    VButton,
    AudioIcon
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <div class="l-grid l-grid--3up">
      <div>
        <v-button
          href="http://www.google.com"
          class="mod-small"
        >
          <audio-icon />
        </v-button>
      </div>
      <div>
        <v-button
          href="http://www.google.com"
        >
          <audio-icon />
        </v-button>
      </div>
      <div>
        <v-button
          href="http://www.google.com"
          class="mod-large"
        >
          <audio-icon />
        </v-button>
      </div>
    </div>
    </div>`
})

export const Flat = () => ({
  components: {
    VButton
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <v-button
      href="http://www.google.com"
      class="mod-flat"
      label="Button"
    />
    </div>`
})
