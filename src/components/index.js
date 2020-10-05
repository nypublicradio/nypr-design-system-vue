import Vue from 'vue'
import JlgreeneLogo from '@/components/icons/wnyc/JlgreeneLogo'
import MainPlayer from '@/components/MainPlayer'
import PersistentPlayer from '@/components/PersistentPlayer'
import ShareTools from '@/components/ShareTools'
import ShareToolsItem from '@/components/ShareToolsItem'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import VSpacer from '@/components/VSpacer'
import WnycLogo from '@/components/icons/wnyc/WnycLogo'

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
