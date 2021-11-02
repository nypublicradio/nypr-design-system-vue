import { mount, shallowMount } from '@vue/test-utils'
import VByline from '../components/VByline'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VByline', () => {
  const authors = [
    {
      firstName: 'Shumita',
      lastName: 'Basu',
      url: 'http://www.google.com',
      organization: 'WNYC',
      organizationUrl: 'http://www.wnyc.org'
    }
  ]
  test('authors prop works', () => {
    const wrapper = shallowMount(VByline, {
      propsData: {
        authors: authors
      }
    })
    // check if prop works
    expect(wrapper.text()).toContain(authors[0].lastName)
    expect(wrapper.text()).toContain(authors[0].firstName)
    expect(wrapper.text()).toContain(authors[0].organization)
    const div = wrapper.findAll('nuxt-link')
    expect(div.at(0).attributes().to).toBe(authors[0].url)
    expect(div.at(1).attributes().to).toBe(authors[0].organizationUrl)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VByline, {
      propsData: {
        authors
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
