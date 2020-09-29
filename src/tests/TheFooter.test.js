import { shallowMount } from '@vue/test-utils'
import TheFooter from '../components/TheFooter'
import { describe, test, expect } from '@jest/globals'
import AudioIcon from '../components/icons/AudioIcon'

describe('TheFooter', () => {
  test('slogan prop works', () => {
    const slogan = 'new message'
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        slogan: slogan
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.c-main-footer__slogan')
    expect(div.text()).toBe(slogan)
  })

  test('logo slot works', () => {
    const wrapper = shallowMount(TheFooter, {
      slots: {
        logo: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('leftComponent slot works', () => {
    const wrapper = shallowMount(TheFooter, {
      slots: {
        leftComponent: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('rightComponent slot works', () => {
    const wrapper = shallowMount(TheFooter, {
      slots: {
        rightComponent: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('primaryNav prop works', () => {
    const navItems = [
      {
        url: 'http://www.google.com',
        text: 'Secondary Link 1'
      }
    ]
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        primaryNav: navItems
      }
    })
    // check if prop works
    // no need to test the SecondaryNavigation component itself
    // SecondaryNavigation component unit tests are found in SecondaryNavigation.test.js
    expect(wrapper.vm.primaryNav[0].text).toBe(navItems[0].text)
    expect(wrapper.vm.primaryNav[0].url).toBe(navItems[0].url)
  })

  test('secondaryNav prop works', () => {
    const navItems = [
      {
        url: 'http://www.google.com',
        text: 'Secondary Link 1'
      }
    ]
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        secondaryNav: navItems
      }
    })
    // check if prop works
    // no need to test the SecondaryNavigation component itself
    // SecondaryNavigation component unit tests are found in SecondaryNavigation.test.js
    expect(wrapper.vm.secondaryNav[0].text).toBe(navItems[0].text)
    expect(wrapper.vm.secondaryNav[0].url).toBe(navItems[0].url)
  })

  test('tertiaryNav prop works', () => {
    const navItems = [
      {
        url: 'http://www.google.com',
        text: 'Secondary Link 1'
      }
    ]
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        tertiaryNav: navItems
      }
    })
    // check if prop works
    // no need to test the SecondaryNavigation component itself
    // SecondaryNavigation component unit tests are found in SecondaryNavigation.test.js
    expect(wrapper.vm.tertiaryNav[0].text).toBe(navItems[0].text)
    expect(wrapper.vm.tertiaryNav[0].url).toBe(navItems[0].url)
  })

  test('subheader1 prop works', () => {
    const subheader1 = 'new message'
    const navItems = [
      {
        url: 'http://www.google.com',
        text: 'Secondary Link 1'
      }
    ]
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        subheader1: subheader1,
        secondaryNav: navItems
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.c-secondary-nav__subheader')
    expect(div.text()).toContain(subheader1)
  })

  test('subheader2 prop works', () => {
    const subheader2 = 'new message'
    const navItems = [
      {
        url: 'http://www.google.com',
        text: 'Secondary Link 1'
      }
    ]
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        subheader2: subheader2,
        tertiaryNav: navItems
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.c-secondary-nav__subheader')
    expect(div.text()).toContain(subheader2)
  })

  test('social slot works', () => {
    const wrapper = shallowMount(TheFooter, {
      slots: {
        social: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
})
