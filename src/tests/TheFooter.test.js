import { shallowMount } from '@vue/test-utils'
import TheFooter from '../components/TheFooter'
import { describe, test, expect } from "@jest/globals"

describe('TheFooter', () => {

  test('component renders', () => {
    const wrapper = shallowMount(TheFooter)
    expect(wrapper.exists())
  })

})
