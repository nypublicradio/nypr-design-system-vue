import { shallowMount } from '@vue/test-utils'
import TheHeaderNav from '../components/TheHeaderNav'
import { describe, test, expect } from '@jest/globals'

describe('TheHeaderNav', () => {
  test('component renders', () => {
    const wrapper = shallowMount(TheHeaderNav)
    expect(wrapper.exists())
  })
})
