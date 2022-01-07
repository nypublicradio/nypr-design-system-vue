import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import VCard from '../components/VCard'
import AudioIcon from '../components/icons/AudioIcon'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VCard', () => {
  const image = 'https://placehold.it/175x175'
  const alt = 'Title'
  const title = 'Title'
  const titleLink = 'https://example.com'
  const subtitle = 'Subtitle'

  test('it renders all props and slots', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        title,
        titleLink,
        subtitle
      },
      slots: {
        default: AudioIcon
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const imgLinkTag = wrapper.find('.card-image-link')
    const titleLinkTag = wrapper.find('.card-title-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe(title)
    expect(imgLinkTag.attributes('to')).toBe(titleLink)
    expect(titleLinkTag.text()).toContain(title)
    expect(titleLinkTag.attributes('to')).toBe(titleLink)
    expect(subtitleTag.text()).toContain(subtitle)
    // check if the AudioIcon component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('it renders without a slot', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        title,
        titleLink,
        subtitle
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const imgLinkTag = wrapper.find('.card-image-link')
    const titleLinkTag = wrapper.find('.card-title-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe(title)
    expect(imgLinkTag.attributes('to')).toBe(titleLink)
    expect(titleLinkTag.text()).toContain(title)
    expect(titleLinkTag.attributes('to')).toBe(titleLink)
    expect(subtitleTag.text()).toContain(subtitle)
  })

  test('it renders without a title', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        subtitle,
        titleLink
      },
      slots: {
        default: AudioIcon
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const imgLinkTag = wrapper.find('.card-image-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(img.attributes('src')).toBe(image)
    expect(imgLinkTag.attributes('to')).toBe(titleLink)
    expect(subtitleTag.text()).toContain(subtitle)
    // check if the AudioIcon component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('it renders without a subtitle', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        title,
        titleLink
      },
      slots: {
        default: AudioIcon
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const imgLinkTag = wrapper.find('.card-image-link')
    const titleLinkTag = wrapper.find('.card-title-link')
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe(title)
    expect(imgLinkTag.attributes('to')).toBe(titleLink)
    expect(titleLinkTag.text()).toContain(title)
    expect(titleLinkTag.attributes('to')).toBe(titleLink)
    // check if the AudioIcon component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('it renders without a title or a slot', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        subtitle,
        titleLink
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const imgLinkTag = wrapper.find('.card-image-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(img.attributes('src')).toBe(image)
    expect(imgLinkTag.attributes('to')).toBe(titleLink)
    expect(subtitleTag.text()).toContain(subtitle)
  })

  test('it renders without a subtitle or a slot', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        title,
        titleLink
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const imgLinkTag = wrapper.find('.card-image-link')
    const titleLinkTag = wrapper.find('.card-title-link')
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe(title)
    expect(imgLinkTag.attributes('to')).toBe(titleLink)
    expect(titleLinkTag.text()).toContain(title)
    expect(titleLinkTag.attributes('to')).toBe(titleLink)
  })

  test('it renders without a title, subtitle or a slot', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        titleLink
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const imgLinkTag = wrapper.find('.card-image-link')
    expect(img.attributes('src')).toBe(image)
    expect(imgLinkTag.attributes('to')).toBe(titleLink)
  })

  test('it renders without a link', () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        title,
        subtitle
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const img = wrapper.find('.card-image .image')
    const titleTag = wrapper.find('.card-title')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(wrapper.find('.card-title-link').exists()).toBe(false)
    expect(img.attributes('src')).toBe(image)
    expect(img.attributes('alt')).toBe('')
    expect(titleTag.text()).toContain(title)
    expect(subtitleTag.text()).toContain(subtitle)
  })

  test('it renders without an image', () => {
    const wrapper = mount(VCard, {
      propsData: {
        title,
        titleLink,
        subtitle
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const titleTag = wrapper.find('.card-title')
    const titleLinkTag = wrapper.find('.card-title-link')
    const subtitleTag = wrapper.find('.card-subtitle')
    expect(wrapper.find('.card-image').exists()).toBe(false)
    expect(titleTag.text()).toContain(title)
    expect(titleLinkTag.text()).toContain(title)
    expect(titleLinkTag.attributes('to')).toBe(titleLink)
    expect(subtitleTag.text()).toContain(subtitle)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VCard, {
      propsData: {
        image,
        alt,
        title,
        titleLink,
        subtitle
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
