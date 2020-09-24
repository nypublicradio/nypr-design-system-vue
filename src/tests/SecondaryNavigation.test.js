import { shallowMount } from '@vue/test-utils'
import SecondaryNavigation from '../components/SecondaryNavigation'
import { describe, test, expect } from '@jest/globals'

describe('SecondaryNavigation', () => {
  test('component renders', () => {
    const wrapper = shallowMount(SecondaryNavigation)
    expect(wrapper.exists())
  })

  test('orientation prop works', () => {
    const wrapper = shallowMount(SecondaryNavigation, {
      propsData: {
        orientation: 'horizontal'
      }
    })
    // check if prop was passed correctly
    expect(wrapper.vm.orientation).toBe('horizontal')
  })
})
