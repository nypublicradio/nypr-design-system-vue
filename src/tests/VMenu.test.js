import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import VMenu from '../components/VMenu'
import AudioIcon from '../components/icons/AudioIcon'

describe('VMenu', () => {
  const navigation = [
    {
      url: 'http://www.google.com',
      text: 'Primary Link 1'
    },
    {
      url: 'http://www.google.com',
      text: 'Primary Link 2'
    },
    {
      url: 'http://www.google.com',
      text: 'Primary Link 3'
    }
  ]

  test('hamburger button works', () => {
    const wrapper = mount(VMenu)
    expect(wrapper.vm.$data.menuOpen).toBe(false)
    const div = wrapper.get('.menu-hamburger')
    div.trigger('click')
    expect(wrapper.vm.$data.menuOpen).toBe(true)
  })

  test('primaryNav prop works', () => {
    const wrapper = mount(VMenu, {
      propsData: {
        primaryNav: navigation
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if primaryNav prop works and was rendered correctly
    wrapper.vm.$nextTick(() => {
      const div = wrapper.find('.menu-primary-navigation')
      expect(div.exists()).toBe(true)
    })
  })

  test('secondaryNav prop works', () => {
    const wrapper = mount(VMenu, {
      propsData: {
        secondaryNav: navigation
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if secondaryNav prop works and was rendered correctly
    wrapper.vm.$nextTick(() => {
      const div = wrapper.find('.menu-secondary-navigation')
      expect(div.exists()).toBe(true)
    })
  })

  test('button slot works', () => {
    const wrapper = mount(VMenu, {
      slots: {
        button: AudioIcon
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if the component was successfully passed through the slot
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
    })
  })

  test('logo slot works', () => {
    const wrapper = mount(VMenu, {
      slots: {
        logo: AudioIcon
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if the component was successfully passed through the slot
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
    })
  })

  test('component slot works', () => {
    const wrapper = mount(VMenu, {
      slots: {
        component: AudioIcon
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if the component was successfully passed through the slot
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
    })
  })

  test('search slot works', () => {
    const wrapper = mount(VMenu, {
      slots: {
        search: AudioIcon
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if the component was successfully passed through the slot
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
    })
  })

  test('social slot works', () => {
    const wrapper = mount(VMenu, {
      slots: {
        social: AudioIcon
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if the component was successfully passed through the slot
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
    })
  })
})
