import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import SegmentListItem from '../components/SegmentListItem'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

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
        newWindow,
        title,
        url
      }
    })
    // check if url prop works and was rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes('href')).toBe(url)
  })
  test('title prop works', () => {
    const wrapper = mount(SegmentListItem, {
      propsData: {
        newWindow,
        title,
        url
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
        newWindow,
        title,
        url
      }
    })
    // check if newWindow prop works and was rendered correctly
    const div = wrapper.find('a')
    expect(div.attributes('target')).toBe('_blank')
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(SegmentListItem, {
      propsData: { title, url, newWindow }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
