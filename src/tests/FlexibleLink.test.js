import { shallowMount } from '@vue/test-utils'
import { describe, test, expect, jest } from '@jest/globals'
import FlexibleLink from '../components/FlexibleLink'

describe('FlexibleLink', () => {
  let wrapper = {};
  
  // find NuxtLink 
  const findNuxtLink = () => wrapper.find('nuxt-link-stub')
  // find an 'a' tag
  const findAnchor = () => wrapper.find('a')

  //component factory
  const createComponent = ({ propsData = {} } = {}) => {
    wrapper = shallowMount(FlexibleLink, {
      propsData,
      global: {
        stubs: {
          'nuxt-link': true
        }
      }
    })
  }

  afterEach(() => {
    if (wrapper.destroy) {
      wrapper.destroy()
    } else {
      wrapper = null;
    }
  })

  it('should render with a relative link', () => {
    createComponent({ propsData: {
      to: '/abc' 
    }})
    expect(findNuxtLink().exists()).toBe(true)
    expect(findNuxtLink().attributes('to')).toBe('/abc')
  })


  it('should render with an external link', () => {
    createComponent({ propsData:{
      to: 'https://example.com' 
    }})
    expect(findAnchor().exists()).toBe(true)
    expect(findAnchor().attributes('href')).toBe('https://example.com')
    expect(findAnchor().attributes('target')).toBe('_blank')
    expect(findAnchor().attributes('rel')).toBe('noopener noreferrer')
    expect(findAnchor().attributes('class')).toBe('external')
  })

})
