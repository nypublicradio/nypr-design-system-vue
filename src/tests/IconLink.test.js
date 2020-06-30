import { shallowMount } from '@vue/test-utils'
import IconLink from '../components/IconLink'
import { describe, test, expect } from "@jest/globals"

describe('IconLink', () => {

  test('component renders', () => {
    const wrapper = shallowMount(IconLink)
    expect(wrapper.exists())
  })

  test('link prop works', () => {
    const wrapper = shallowMount(IconLink, {
      propsData: {
        icon: './assets/spotify.svg',
        link: 'https://www.spotify.com',
        altText: 'spotify'
      }
    })
    // check if prop was passed correctly
    expect(wrapper.vm.link).toBe('https://www.spotify.com')
    //check if link is rendering correctly
    const link = wrapper.findAll('a').at(0)
    expect(link.attributes('href')).toBe('https://www.spotify.com')
  })

  test('icon prop works', () => {
    const wrapper = shallowMount(IconLink, {
      propsData: {
        icon: './assets/spotify.svg',
        link: 'https://www.spotify.com',
        altText: 'spotify'
      }
    })
    // check if prop was passed correctly
    expect(wrapper.vm.icon).toBe('./assets/spotify.svg')
    //check if link is rendering correctly
    const img = wrapper.findAll('img').at(0)
    expect(img.attributes('src')).toBe('./assets/spotify.svg')
  })

  test('alt-text prop works', () => {
    const wrapper = shallowMount(IconLink, {
      propsData: {
        icon: './assets/spotify.svg',
        link: 'https://www.spotify.com',
        altText: 'spotify'
      }
    })
    // check if prop was passed correctly
    expect(wrapper.vm.altText).toBe('spotify')
    //check if link is rendering correctly
    const img = wrapper.findAll('img').at(0)
    expect(img.attributes('alt')).toBe('spotify')
  })

})
