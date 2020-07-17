import { shallowMount } from '@vue/test-utils'
import MediaBlock from '../components/MediaBlock'
import { describe, test, expect } from '@jest/globals'

describe('MediaBlock', () => {
  test('component renders', () => {
    const wrapper = shallowMount(MediaBlock)
    expect(wrapper.exists())
  })

  test('url prop works', () => {
    const wrapper = shallowMount(MediaBlock, {
      propsData: {
        url: 'https://player.vimeo.com/video/90283590'
      }
    })
    // check if prop was passed correctly
    expect(wrapper.vm.url).toBe('https://player.vimeo.com/video/90283590')
    // check if iframe src is populating correctly
    const iframe = wrapper.findAll('iframe').at(0)
    expect(iframe.attributes('src')).toBe('https://player.vimeo.com/video/90283590')
  })
})
