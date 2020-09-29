import { shallowMount } from '@vue/test-utils'
import MediaEmbed from '../components/MediaEmbed'
import { describe, test, expect } from '@jest/globals'

describe('MediaEmbed', () => {
  test('url prop works', () => {
    const url = 'https://player.vimeo.com/video/90283590'
    const wrapper = shallowMount(MediaEmbed, {
      propsData: {
        url: url
      }
    })
    // check if prop works and iframe src is populating correctly
    const iframe = wrapper.findAll('iframe').at(0)
    expect(iframe.attributes('src')).toBe(url)
  })
})
