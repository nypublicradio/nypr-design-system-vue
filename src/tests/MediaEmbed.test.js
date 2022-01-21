import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import MediaEmbed from '../components/MediaEmbed'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('MediaEmbed', () => {
  const url = 'https://player.vimeo.com/video/90283590'
  test('url prop works', () => {
    const wrapper = shallowMount(MediaEmbed, {
      propsData: {
        url
      }
    })
    // check if prop works and iframe src is populating correctly
    const iframe = wrapper.findAll('iframe')
    expect(iframe[0].attributes('src')).toBe(url)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(MediaEmbed, {
      propsData: { url }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
