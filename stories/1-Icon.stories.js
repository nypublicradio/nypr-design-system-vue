import Jlgreene from '../src/components/icons/wnyc/jlgreene'
import WnycLogo from '../src/components/icons/wnyc/WnycLogo'

export default {
  title: 'Components/Atoms/Icons'
}

export const WnycIcons = () => ({
  components: {
    Jlgreene,
    WnycLogo
  },
  template: `
    <div class="sbdocs-large-container sbdocs-container-margin">
    <div class="l-grid l-grid--4up">
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <wnyc-logo/>
            </span>
          <div>wnyc logo</div>
        </div>
      </div>
      <div>
        <div class="u-flex u-align-items--center u-space--bottom">
            <span class="o-icon u-icon--l u-space--right">
              <jlgreene title="test title" />
            </span>
          <div>jlgreene logo</div>
        </div>
      </div>
    </div>
    </div>`
})
