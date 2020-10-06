import CurrentEpisode from '../src/components/CurrentEpisode'

export default {
  title: 'Components/Molecules/Current Episode'
}

export const Inactive = () => ({
  components: {
    CurrentEpisode
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
      <current-episode
        intro="On Today's Show" 
        tease="This week, people in Tusla filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre." 
        image="https://media.wnyc.org/i/300/300/l/80/1/fresh_air_crD2Ny5.png"
      />
    </div>`
})

export const Active = () => ({
  components: {
    CurrentEpisode
  },
  template: `
      <current-episode
        intro="On Today's Show" 
        tease="This week, people in Tusla filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre." 
        image="https://media.wnyc.org/i/300/300/l/80/1/fresh_air_crD2Ny5.png"
        :active="true"
        imageDescription="Democratic vice presidential candidate Sen. Kamala Harris, D-Calif., speaks during the third day of the Democratic National Convention, Wednesday, Aug. 19, 2020, at the Chase Center in Wilmington."
      />`
})
