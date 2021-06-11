import { mount, shallowMount } from '@vue/test-utils'
import ArticleMetadata from '../components/ArticleMetadata'
import AudioIcon from '../components/icons/AudioIcon'
import VCounter from '../components/VCounter'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('ArticleMetadata', () => {
  const publishDate = 'Jan 1, 2020'
  const updatedDate = 'Mar 2, 2020'
  test('authors slot works', () => {
    const wrapper = shallowMount(ArticleMetadata, {
      slots: {
        authors: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
  test('photos slot works', () => {
    const wrapper = shallowMount(ArticleMetadata, {
      slots: {
        photos: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })
  test.skip('comments slot works', () => {
    const wrapper = mount(ArticleMetadata, {
      slots: {
        comments: '<v-counter icon="comment" value="40" href="https://www.google.com"/>'
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(VCounter).exists()).toBe(true)
  })
  test('publishDate prop works', () => {
    const wrapper = shallowMount(ArticleMetadata, {
      propsData: {
        publishDate,
        updatedDate
      }
    })
    // check if prop works
    expect(wrapper.text()).toContain(publishDate)
  })
  test('updatedDate prop works', () => {
    const wrapper = shallowMount(ArticleMetadata, {
      propsData: {
        publishDate,
        updatedDate
      }
    })
    // check if prop works
    expect(wrapper.text()).toContain(updatedDate)
  })
  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(ArticleMetadata, {
      propsData: {
        publishDate,
        updatedDate
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
