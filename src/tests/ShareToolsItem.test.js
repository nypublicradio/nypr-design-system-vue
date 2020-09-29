import { shallowMount } from '@vue/test-utils'
import ShareToolsItem from '../components/ShareToolsItem'
import FacebookIcon from '../components/icons/FacebookIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import RedditIcon from '../components/icons/RedditIcon'
import SpotifyIcon from '../components/icons/SpotifyIcon'
import TwitterIcon from '../components/icons/TwitterIcon'
import YoutubeIcon from '../components/icons/YoutubeIcon'
import { describe, test, expect } from '@jest/globals'

describe('ShareToolsItem', () => {
  test('username attribute works', () => {
    const username = 'WNYC'
    const service = 'facebook'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        username: username,
        service: service
      }
    })
    // check if prop works and rendered correctly
    expect(wrapper.attributes('href')).toBe('https://www.facebook.com/' + username)
  })

  test('label attribute works', () => {
    const label = 'follow us'
    const service = 'facebook'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        label: label,
        service: service
      }
    })
    // check if prop works and rendered correctly
    expect(wrapper.attributes('aria-label')).toBe(label)
  })

  test('aria-label has a default value', () => {
    const service = 'facebook'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service
      }
    })
    // check if prop works and rendered correctly
    expect(wrapper.attributes('aria-label')).toBe('Follow us on ' + service)
  })

  test('service prop works: facebook', () => {
    const service = 'facebook'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(FacebookIcon).exists()).toBe(true)
  })

  test('service prop works: instagram', () => {
    const service = 'instagram'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(InstagramIcon).exists()).toBe(true)
  })

  test('service prop works: spotify', () => {
    const service = 'spotify'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(SpotifyIcon).exists()).toBe(true)
  })

  test('service prop works: reddit', () => {
    const service = 'reddit'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(RedditIcon).exists()).toBe(true)
  })

  test('service prop works: twitter', () => {
    const service = 'twitter'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(TwitterIcon).exists()).toBe(true)
  })

  test('service prop works: youtube', () => {
    const service = 'youtube'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(YoutubeIcon).exists()).toBe(true)
  })
})
