import { shallowMount } from '@vue/test-utils'
import TheAboutBar from '../components/TheAboutBar'
import { describe, test, expect } from "@jest/globals"

describe('TheAboutBar', () => {

  test('component renders', () => {
    const wrapper = shallowMount(TheAboutBar)
    expect(wrapper.exists())
  })

})
