import { shallowMount } from '@vue/test-utils'
import BreadCrumbs from '../components/BreadCrumbs'
import { describe, test, expect } from "@jest/globals"

describe('BreadCrumbs', () => {

  test('component renders', () => {
    const wrapper = shallowMount(BreadCrumbs)
    expect(wrapper.exists())
  })

  test('crumbs prop works', () => {
    const crumbsTest = [ { name: 'Home', link: 'http://www.link1.com' }, {
      name: 'Resources',
      link: 'http://www.link2.com'
    }, { name: 'This Article', link: '' } ]
    const wrapper = shallowMount(BreadCrumbs, {
      propsData: {
        crumbs: crumbsTest
      }
    })
    // check if prop was passed correctly
    expect(wrapper.vm.crumbs).toEqual(crumbsTest)
    //check if links and text are rendering correctly
    const link1 = wrapper.findAll('a').at(0)
    expect(link1.text()).toBe('Home')
    expect(link1.attributes('href')).toBe('http://www.link1.com')
    const link2 = wrapper.findAll('a').at(1)
    expect(link2.attributes('href')).toBe('http://www.link2.com')
    expect(link1.text()).toBe('Home')
    const listItem3 = wrapper.findAll('li').at(2)
    expect(listItem3.text()).toBe('This Article')
  })

})
