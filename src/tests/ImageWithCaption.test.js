import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import ImageWithCaption from '../components/ImageWithCaption'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('ImageWithCaption', () => {
  const image = 'http://placehold.it/768x512'
  const imageUrl = 'http://www.google.com'
  const title = 'i am a test title'
  const altText = title
  const caption = 'i am a test caption'
  const credit = 'i am a test credit'
  const creditUrl = 'http://www.google.com'
  const height = '300'
  const width = '300'
  test('image prop works', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        image: image
      }
    })
    // check if image prop works and was rendered correctly
    const div = wrapper.find('img')
    expect(div.exists()).toBe(true)
  })

  test('image url prop works', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        image: image,
        imageUrl: imageUrl
      }
    })
    // check if image prop works and was rendered correctly
    const div = wrapper.find('.image-with-caption-image-link')
    expect(div.attributes('href')).toBe(imageUrl)
  })

  test('image does not render if image prop is not given', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        caption
      }
    })
    // check if prop was not rendered
    const div = wrapper.find('img')
    expect(div.exists()).toBe(false)
  })

  test('altText prop works', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        altText: altText,
        image: image
      }
    })
    // check if altText prop works and was rendered correctly
    const div = wrapper.find('img')
    expect(div.attributes('alt')).toBe(title)
  })

  test('height and width props work', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        image,
        height,
        width
      }
    })
    // check if altText prop works and was rendered correctly
    const div = wrapper.find('img')
    expect(div.attributes('height')).toBe(height)
    expect(div.attributes('width')).toBe(width)
  })

  test('caption prop works', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        caption: caption,
        image: image
      }
    })
    // check if caption prop works and was rendered correctly
    const div = wrapper.find('.image-with-caption-caption')
    expect(div.text()).toContain(caption)
  })

  test('caption does not render if caption prop is not given', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        image: image
      }
    })
    // check if prop was not rendered
    const div = wrapper.find('.image-with-caption-caption')
    expect(div.exists()).toBe(false)
  })

  test('credit prop works', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        credit: credit,
        image: image
      }
    })
    // check if credit prop works and was rendered correctly
    const div = wrapper.find('.image-with-caption-credit')
    expect(div.text()).toContain(credit)
  })

  test('credit does not render if credit prop is not given', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        image: image
      }
    })
    // check if prop was not rendered
    const div = wrapper.find('.image-with-caption-credit')
    expect(div.exists()).toBe(false)
  })

  test('creditUrl prop works', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        creditUrl: creditUrl,
        credit: credit,
        image: image
      }
    })
    // check if creditUrl prop works and was rendered correctly
    const div = wrapper.find('.image-with-caption-credit-link')
    expect(div.attributes('href')).toBe(creditUrl)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: { image, title, altText, caption, credit, creditUrl }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test('toggleCaption function works', async () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: { image, title, altText, caption, credit, creditUrl }
    })
    const div = wrapper.get('.image-with-caption-icons')
    const divInfo = wrapper.find('.image-with-caption-icons-info')
    const divClose = wrapper.find('.image-with-caption-icons-close')
    expect(divInfo.isVisible()).toBe(true)
    expect(divClose.isVisible()).toBe(false)
    div.trigger('click')
    await wrapper.vm.$nextTick()
    expect(divInfo.isVisible()).toBe(false)
    expect(divClose.isVisible()).toBe(true)
    div.trigger('click')
    await wrapper.vm.$nextTick()
    expect(divInfo.isVisible()).toBe(true)
    expect(divClose.isVisible()).toBe(false)
  })
})
