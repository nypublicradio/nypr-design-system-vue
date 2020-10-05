import Vue from 'vue'
import JlgreeneLogo from './icons/wnyc/JlgreeneLogo'
import MainPlayer from './MainPlayer'
import PersistentPlayer from './PersistentPlayer'
import ShareTools from './ShareTools'
import ShareToolsItem from './ShareToolsItem'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import VSpacer from './VSpacer'
import WnycLogo from './icons/wnyc/WnycLogo'

const Components = {
  JlgreeneLogo,
  MainPlayer,
  PersistentPlayer,
  ShareTools,
  ShareToolsItem,
  TheHeader,
  TheFooter,
  VSpacer,
  WnycLogo
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
