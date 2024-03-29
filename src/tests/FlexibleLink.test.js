import { shallowMount } from '@vue/test-utils'
import { describe, expect } from '@jest/globals'
import FlexibleLink from '../components/FlexibleLink'

describe('FlexibleLink', () => {
  let wrapper = {}

  // find NuxtLink
  const findNuxtLink = () => wrapper.find('nuxt-link-stub')
  // find an 'a' tag
  const findAnchor = () => wrapper.find('a')

  // component factory
  const createComponent = ({ props = {} } = {}) => {
    wrapper = shallowMount(FlexibleLink, {
      props,
      global: {
        stubs: {
          'nuxt-link': true
        }
      }
    })
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render with a relative link', () => {
    createComponent({
      props: {
        to: '/abc'
      }
    })
    expect(findNuxtLink().exists()).toBe(true)
    expect(findNuxtLink().attributes('to')).toBe('/abc')
  })

  it('should render with an external link', () => {
    createComponent({
      props: {
        to: 'https://example.com'
      }
    })
    expect(findAnchor().exists()).toBe(true)
    expect(findAnchor().attributes('href')).toBe('https://example.com')
    expect(findAnchor().attributes('target')).toBe('_blank')
    expect(findAnchor().attributes('rel')).toBe('noopener noreferrer')
    expect(findAnchor().attributes('class')).toBe('external')
  })
})
