import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import SegmentListItem from '../components/SegmentListItem'

// FYI
// the SegmentList component is just an accordion
// tests for that are covered in the VAccordion.test.js

describe('SegmentListItem', () => {
  let newWindow = false
  const title = 'test credit'
  const url = 'http://placehold.it/768x512'
  test('url prop works', () => {
    const wrapper = mount(SegmentListItem, {
      propsData: {
        newWindow: newWindow,
        title: title,
        url: url
      }
    })
    // check if url prop works and was rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes('href')).toBe(url)
  })
  test('title prop works', () => {
    const wrapper = mount(SegmentListItem, {
      propsData: {
        newWindow: newWindow,
        title: title,
        url: url
      }
    })
    // check if title prop works and was rendered correctly
    const div = wrapper.find('.segment-list-item-title')
    expect(div.text()).toContain(title)
  })
  newWindow = true
  test('newWindow prop works', () => {
    const wrapper = mount(SegmentListItem, {
      propsData: {
        newWindow: newWindow,
        title: title,
        url: url
      }
    })
    // check if newWindow prop works and was rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes('target')).toBe('_blank')
  })
})
