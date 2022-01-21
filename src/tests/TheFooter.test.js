import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import TheFooter from '../components/TheFooter'
import AudioIcon from '../components/icons/AudioIcon'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('TheFooter', () => {
  const slogan = 'slogan message'
  const subheader1 = 'subheader1 message'
  const subheader2 = 'subheader2 message'
  const navItems = [
    {
      url: 'http://www.google.com',
      text: 'Secondary Link 1'
    }
  ]
  test('slogan prop works', () => {
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        slogan
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

  test('legalNav prop works', () => {
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        legalNav: navItems
      }
    })
    // check if prop works
    // no need to test the SecondaryNavigation component itself
    // SecondaryNavigation component unit tests are found in SecondaryNavigation.test.js
    expect(wrapper.vm.legalNav[0].text).toBe(navItems[0].text)
    expect(wrapper.vm.legalNav[0].url).toBe(navItems[0].url)
  })

  test('subheader1 prop works', () => {
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        subheader1,
        secondaryNav: navItems
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.c-secondary-nav__subheader')
    expect(div.text()).toContain(subheader1)
  })

  test('subheader2 prop works', () => {
    const wrapper = shallowMount(TheFooter, {
      propsData: {
        subheader2,
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

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(TheFooter, {
      propsData: { subheader1, subheader2, slogan }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
