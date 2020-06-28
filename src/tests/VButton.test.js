import { shallowMount } from '@vue/test-utils'
import VButton from '../components/VButton'
import { describe, test, expect } from "@jest/globals"

describe('VButton', () => {

  test('component renders', () => {
    const wrapper = shallowMount(VButton)
    expect(wrapper.exists())
  })

  test('has default text', () => {
    const wrapper = shallowMount(VButton)
    expect(wrapper.text()).toBe('click here')
  })

  test('link prop works', () => {
    const wrapper = shallowMount(VButton, {
      propsData: {
        link: 'http://www.foo.com'
      }
    })
    expect(wrapper.props().link).toBe('http://www.foo.com')
  })

})
