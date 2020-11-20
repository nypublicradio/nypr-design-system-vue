import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import ImageWithCaption from '../components/ImageWithCaption'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('ImageWithCaption', () => {
  const image = 'http://placehold.it/768x512'
  const title = 'i am a test title'
  const altText = title
  const caption = 'i am a test caption'
  const credit = 'i am a test credit'
  const creditUrl = 'http://www.google.com'
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

  test('creditUrl prop works', () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        creditUrl: creditUrl,
        credit: credit,
        image: image
      }
    })
    // check if creditUrl prop works and was rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes('href')).toBe(creditUrl)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(ImageWithCaption, {
      propsData: { image, title, altText, caption, credit, creditUrl }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
