import VSpacer from '../src/components/VSpacer'

export default {
  title: 'Foundations'
}

export const Intro = () => ({
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <h1 class="u-space--double--bottom">Welcome to Radial (in Vue!), The New York Public Radio Design System</h1>
    </div>
  `
})

export const Fonts = () => ({
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <h1 class="u-space--bottom">H1 Headline No. 1</h1>
      <h2 class="u-space--bottom">H2 Headline No. 2</h2>
      <h3 class="u-space--bottom">H3 Headline No. 3</h3>
      <h4 class="u-space--bottom">H4 Headline No. 4</h4>
      <h5 class="u-space--bottom">H5 Headline No. 5</h5>
      <h6 class="u-space--bottom">H6 Headline No. 6</h6>
      <p class="u-space--bottom">This is normal paragraph text! Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="small-text u-space--bottom">This is small paragraph text!</p>
      <p><a href="#">This is an inline link</a></p>
    </div>
  `
})

export const WhitelabelColors = () => ({
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <div class="colors">
        <div class="u-background-color--cool-white"><span>cool-white</span></div>
        <div class="u-background-color--ceramic-blue"><span>ceramic-blue</span></div>
        <div class="u-background-color--concrete"><span>concrete</span></div>
        <div class="u-background-color--ember-red"><span>ember-red</span></div>
        <div class="u-background-color--cool-blue"><span>cool-blue</span></div>
        <div class="u-background-color--sky-blue"><span>sky-blue</span></div>
        <div class="u-background-color--sea-green"><span>sea-green</span></div>
        <div class="u-background-color--bright-purple"><span>bright-purple</span></div>
        <div class="u-background-color--light-gray"><span>light gray</span></div>
        <div class="u-background-color--gray"><span>gray</span></div>
        <div class="u-background-color--dark-gray"><span>dark gray</span></div>
      </div>
    </div>
  `
})

export const Spacing = () => ({
  components: { VSpacer },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <p class="u-space--bottom">Half:</p>
      <v-spacer size="half" class="u-background-color--light-gray" />
      <p class="u-space--top u-space--bottom">Default:</p>
      <v-spacer class="u-background-color--light-gray" />
      <p class="u-space--top u-space--bottom">Double:</p>
      <v-spacer size="double" class="u-background-color--light-gray" />
      <p class="u-space--top u-space--bottom">Triple:</p>
      <v-spacer size="triple" class="u-background-color--light-gray" />
      <p class="u-space--top u-space--bottom">Quad:</p>
      <v-spacer size="quad" class="u-background-color--light-gray" />
    </div>
  `
})

export const Grid = () => ({
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <div class="l-grid l-grid--2up u-space--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">Two Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Two Column</div>
      </div>
      <div class="l-grid l-grid--3up u-space--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">Three Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Three Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Three Column</div>
      </div>
      <div class="l-grid l-grid--4up u-space--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">Four Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Four Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Four Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Four Column</div>
      </div>
      <div class="l-grid l-grid--5up u-space--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Five Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Five Column</div>
      </div>
      <div class="l-grid l-grid--2x3 u-space--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">1/3 Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">2/3 Column</div>
      </div>
      <div class="l-grid l-grid--3x2 u-space--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">2/3 Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">1/3 Column</div>
      </div>
      <div class="l-grid l-grid--1x4 u-space--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">1/4 Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">3/4 Column</div>
      </div>
      <div class="l-grid l-grid--4x1 l-grid--full-width-small u-space--double--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">3/4 Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">1/4 Column</div>
      </div>
      <h3 class="u-space--bottom">With large gutters:</h3>
      <div class="l-grid l-grid--2up l-grid--large-gutters u-space--double--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">Two Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Two Column</div>
      </div>
      <h3 class="u-space--bottom">With no gutters:</h3>
      <div class="l-grid l-grid--no-gutters l-grid--2up u-space--double--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center">Two Column</div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">Two Column</div>
      </div>
      <h3 class="u-space--bottom">Reordering:</h3>
      <div class="l-grid l-grid--2up u-space--double--bottom">
        <div class="u-background-color--light-gray u-padding--half u-align--center l-grid--order-1-large">Second on
          small breakpoint, first elsewhere
        </div>
        <div class="u-background-color--light-gray u-padding--half u-align--center l-grid--order-2-large">First on
          small breakpoint, second elsewhere
        </div>
      </div>
      <h3 class="u-space--bottom">Vertical Alignment:</h3>
      <div class="l-grid l-grid--1x4 l-grid--top u-space--bottom">
        <div><img src="https://placehold.it/800x600" alt="placeholder image"/></div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">top</div>
      </div>
      <div class="l-grid l-grid--1x4 l-grid--middle u-space--bottom">
        <div><img src="https://placehold.it/800x600" alt="placeholder image"/></div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">middle</div>
      </div>
      <div class="l-grid l-grid--1x4 l-grid--bottom u-space--bottom">
        <div><img src="https://placehold.it/800x600" alt="placeholder image"/></div>
        <div class="u-background-color--light-gray u-padding--half u-align--center">bottom</div>
      </div>
    </div>
  `
})
