import { mount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import VLottie from '../components/VLottie'
import * as animationData from '../components/animations/AudioWaveIsActiveJson.json'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VLottie', () => {
  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VLottie)
    wrapper.setData(
      { defaultOptions: { animationData: animationData } }
    )
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
