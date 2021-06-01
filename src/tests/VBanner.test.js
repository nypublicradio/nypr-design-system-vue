import { mount, shallowMount } from '@vue/test-utils'
import VBanner from '../components/VBanner'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VBanner', () => {
  const description = 'this is a description'
  const headline = 'this is a headline'
  const tag = 'tagname'
  const tagLink = 'test'
  const thumbnail = 'http://placehold.it/275x275'
  const thumbnailAltText = 'Breaking News alt text'
  test('description prop works', () => {
    const wrapper = shallowMount(VBanner, {
      propsData: {
        description,
        headline,
        tag,
        tagLink,
        showJustNow: false
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.banner-description')
    expect(div.text()).toBe(description)
  })

  test('headline prop works', () => {
    const wrapper = shallowMount(VBanner, {
      propsData: {
        description,
        headline,
        tag,
        tagLink
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.banner-headline')
    expect(div.text()).toBe(headline)
  })

  test('tag prop works', () => {
    const wrapper = mount(VBanner, {
      propsData: {
        description,
        headline,
        tag,
        tagLink
      }
    })
    // check if it was rendered correctly
    const div = wrapper.find('.banner .tag')
    expect(div.text()).toBe(tag)
  })

  test('tagLink prop works', () => {
    const wrapper = mount(VBanner, {
      propsData: {
        description,
        headline,
        tag,
        tagLink
      }
    })
    // check if prop works and rendered correctly
    const div = wrapper.find('a')
    // this is using nuxt-link, so we need to find the "to" attribute instead of "href"
    expect(div.attributes().to).toBe(tagLink)
  })

  test('thumbnail and thumbnailAltText props work', () => {
    const wrapper = mount(VBanner, {
      propsData: {
        description,
        headline,
        tag,
        tagLink,
        thumbnail,
        thumbnailAltText
      }
    })
    // check if prop works and rendered correctly
    const div = wrapper.find('.banner-thumbnail img')
    expect(div.attributes().src).toBe(thumbnail)
    expect(div.attributes().alt).toBe(thumbnailAltText)
  })

  test('default slot works', () => {
    const wrapper = shallowMount(VBanner, {
      propsData: {
        description,
        headline,
        tag,
        tagLink
      },
      slots: {
        default: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VBanner, {
      slots: {
        default: AudioIcon
      },
      propsData: {
        description,
        headline,
        tag,
        tagLink
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test('showCloseButton prop and close functionality work', async () => {
    const wrapper = mount(VBanner, {
      propsData: {
        description,
        headline,
        tag,
        tagLink,
        showCloseButton: true
      }
    })
    const div = wrapper.find('.banner')
    const divClose = wrapper.find('.banner-close')
    expect(div.isVisible()).toBe(true)
    expect(wrapper.vm.active).toBe(true)
    divClose.trigger('click')
    await wrapper.vm.$nextTick()
    expect(div.isVisible()).toBe(false)
    expect(wrapper.vm.active).toBe(false)
  })
})
