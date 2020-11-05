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
