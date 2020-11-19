import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import ImageWithCaption from '../components/ImageWithCaption'

describe('ImageWithCaption', () => {
  test('image prop works', () => {
    const value = 'http://placehold.it/768x512'
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        image: value
      }
    })
    // check if image prop works and was rendered correctly
    const div = wrapper.find('img')
    expect(div.exists()).toBe(true)
  })
})

describe('ImageWithCaption', () => {
  test('altText prop works', () => {
    const value = 'i am a test string'
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        altText: value,
        image: 'http://placehold.it/768x512'
      }
    })
    // check if altText prop works and was rendered correctly
    const div = wrapper.find('img')
    expect(div.attributes('alt')).toBe(value)
  })
})

describe('ImageWithCaption', () => {
  test('caption prop works', () => {
    const value = 'i am a test string'
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        caption: value,
        image: 'http://placehold.it/768x512'
      }
    })
    // check if caption prop works and was rendered correctly
    const div = wrapper.find('.image-with-caption-caption')
    expect(div.text()).toContain(value)
  })
})

describe('ImageWithCaption', () => {
  test('credit prop works', () => {
    const value = 'i am a test string'
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        credit: value,
        image: 'http://placehold.it/768x512'
      }
    })
    // check if credit prop works and was rendered correctly
    const div = wrapper.find('.image-with-caption-credit')
    expect(div.text()).toContain(value)
  })
})

describe('ImageWithCaption', () => {
  test('creditUrl prop works', () => {
    const value = 'http://www.google.com'
    const wrapper = mount(ImageWithCaption, {
      propsData: {
        creditUrl: value,
        credit: 'test credit',
        image: 'http://placehold.it/768x512'
      }
    })
    // check if creditUrl prop works and was rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes('href')).toBe(value)
  })
})
