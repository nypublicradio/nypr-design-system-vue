import { mount, shallowMount } from '@vue/test-utils'
import ShareToolsItem from '../components/ShareToolsItem'
import FacebookIcon from '../components/icons/FacebookIcon'
import InstagramIcon from '../components/icons/InstagramIcon'
import SpotifyIcon from '../components/icons/SpotifyIcon'
import TwitterIcon from '../components/icons/TwitterIcon'
import YoutubeIcon from '../components/icons/YoutubeIcon'
import EmailIcon from '../components/icons/EmailIcon'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('ShareToolsItem', () => {
  const label = 'follow us'
  const username = 'WNYC'
  const service = 'facebook'
  const link = 'http://www.test.com'
  test('username attribute works', () => {
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
    const service = 'facebook'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        label: label,
        username: username,
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
        username: username,
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
        username: username,
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(FacebookIcon).exists()).toBe(true)
    expect(wrapper.attributes().href).toBe('https://www.facebook.com/WNYC')
  })

  test('service prop works: instagram', () => {
    const service = 'instagram'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        username: username,
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(InstagramIcon).exists()).toBe(true)
    expect(wrapper.attributes().href).toBe('https://www.instagram.com/WNYC')
  })

  test('service prop works: spotify', () => {
    const service = 'spotify'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        username: username,
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(SpotifyIcon).exists()).toBe(true)
    expect(wrapper.attributes().href).toBe('https://open.spotify.com/playlist/WNYC')
  })

  test('service prop works: twitter', () => {
    const service = 'twitter'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        username: username,
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(TwitterIcon).exists()).toBe(true)
    expect(wrapper.attributes().href).toBe('https://www.twitter.com/WNYC')
  })

  test('service prop works: youtube', () => {
    const service = 'youtube'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        username: username,
        service: service
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(YoutubeIcon).exists()).toBe(true)
    expect(wrapper.attributes().href).toBe('https://www.youtube.com/channel/WNYC')
  })

  test('service prop works: email', () => {
    const service = 'email'
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        service: service,
        username: 'test@test.com'
      }
    })
    // check if the corresponding component was successfully created
    expect(wrapper.findComponent(EmailIcon).exists()).toBe(true)
    expect(wrapper.attributes().href).toBe('mailto:test@test.com')
  })

  test('link prop works with no service prop', () => {
    const wrapper = shallowMount(ShareToolsItem, {
      propsData: {
        link
      }
    })
    // check if the link was successfully created
    expect(wrapper.attributes().href).toBe(link)
    expect(wrapper.vm.socialLink).toBe('')
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(ShareToolsItem, {
      propsData: {
        username,
        service,
        label
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
