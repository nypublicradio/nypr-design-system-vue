import VAccordion from '../../../src/components/VAccordion'

export default {
  title: 'Components/Molecules/Accordions'
}

export const ClosedOnLoad = () => ({
  components: {
    VAccordion
  },
  template: `
    <div>
    <v-accordion class="u-space--bottom">
      <template v-slot:header><h2>Header 1</h2></template>
      <template v-slot:content>
        <p>
          Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
    <v-accordion class="u-space--bottom">
      <template v-slot:header><p>
        <strong>Header 2 A Really Long Title Goes Here Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>
      </p></template>
      <template v-slot:content>
        <p>
          Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </template>
    </v-accordion>
    <v-accordion>
      <template v-slot:header><p>Header 3</p></template>
      <template v-slot:content>
        <p>
          Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          ea commodo consequat.
        </p>
      </template>
    </v-accordion>
    </div>
  `
})

export const OpenOnLoad = () => ({
  components: {
    VAccordion
  },
  template: `
    <div>
    <v-accordion should-open-on-load class="u-space--bottom">
      <template v-slot:header><h2>Header 1</h2></template>
      <template v-slot:content>
        <p>
          Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
    <v-accordion should-open-on-load class="u-space--bottom">
      <template v-slot:header><p>
        <strong>Header 2 A Really Long Title Goes Here Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>
      </p></template>
      <template v-slot:content>
        <p>
          Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </template>
    </v-accordion>
    <v-accordion should-open-on-load>
      <template v-slot:header><p>Header 3</p></template>
      <template v-slot:content>
        <p>
          Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          ea commodo consequat.
        </p>
      </template>
    </v-accordion>
    </div>
  `
})

export const ClosedOnMobile = () => ({
  components: {
    VAccordion
  },
  template: `
    <div>
    <v-accordion should-open-on-load closed-on-mobile class="u-space--bottom">
      <template v-slot:header><h2>Header 1</h2></template>
      <template v-slot:content>
        <p>
          Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
    <v-accordion should-open-on-load closed-on-mobile class="u-space--bottom">
      <template v-slot:header><p>
        <strong>Header 2 A Really Long Title Goes Here Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong>
      </p></template>
      <template v-slot:content>
        <p>
          Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </template>
    </v-accordion>
    <v-accordion should-open-on-load closed-on-mobile>
      <template v-slot:header><p>Header 3</p></template>
      <template v-slot:content>
        <p>
          Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex
          ea commodo consequat.
        </p>
      </template>
    </v-accordion>
    </div>
  `
})

export const CustomOpenCloseAnimationSpeeds = () => ({
  components: {
    VAccordion
  },
  template: `
    <div>
    <v-accordion class="u-space--bottom" open-speed="5" close-speed="0.25">
      <template v-slot:header><h2>Custom Speeds</h2></template>
      <template v-slot:content>
        <p>
          Custom open and close speeds on this accordion. Default opening speed is 0.5 seconds and half of that for closeing speed. If an opening speed is specified, it will use half of it for the closing speed. If a closing speed is specified, it will use that for the closding spped. Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <a href="#">ea commodo consequat</a>.
        </p>
      </template>
    </v-accordion>
    </div>
  `
})
