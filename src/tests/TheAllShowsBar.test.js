import { shallowMount } from '@vue/test-utils'
import TheAllShowsBar from '../components/TheAllShowsBar'
import { describe, test, expect } from "@jest/globals"

describe('TheAllShowsBar', () => {

  test('component renders', () => {
    const wrapper = shallowMount(TheAllShowsBar)
    expect(wrapper.exists())
  })

})
