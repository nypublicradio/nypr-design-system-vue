import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import TheMenu from '../components/TheMenu'
import AudioIcon from '../components/icons/AudioIcon'
import VSearch from '../components/VSearch'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('TheMenu', () => {
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
  const primaryNav = navigation
  const secondaryNav = navigation

  test('hamburger button works', () => {
    const wrapper = mount(TheMenu)
    expect(wrapper.vm.$data.menuOpen).toBe(false)
    const div = wrapper.get('.menu-hamburger')
    div.trigger('click')
    expect(wrapper.vm.$data.menuOpen).toBe(true)
  })

  test('primaryNav prop works', () => {
    const wrapper = mount(TheMenu, {
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
    const wrapper = mount(TheMenu, {
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
    const wrapper = mount(TheMenu, {
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
    const wrapper = mount(TheMenu, {
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
    const wrapper = mount(TheMenu, {
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
    const wrapper = mount(TheMenu, {
      slots: {
        search: VSearch
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    // check if the component was successfully passed through the slot
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findComponent(VSearch).exists()).toBe(true)
    })
  })

  test('social slot works', () => {
    const wrapper = mount(TheMenu, {
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

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(TheMenu, {
      propsData: {
        primaryNav,
        secondaryNav
      },
      slots: {
        social: AudioIcon,
        search: VSearch,
        logo: AudioIcon,
        component: AudioIcon
      }
    })
    // open the menu
    wrapper.vm.$data.menuOpen = true
    const results = await axe(wrapper.element)
    wrapper.vm.$nextTick(() => {
      expect(results).toHaveNoViolations()
    })
  })
})
