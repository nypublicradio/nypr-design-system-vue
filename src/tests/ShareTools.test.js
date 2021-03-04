import { mount, shallowMount } from '@vue/test-utils'
import ShareTools from '../components/ShareTools'
import AudioIcon from '../components/icons/AudioIcon'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('ShareTools', () => {
  const label = 'The Label'
  const layout = 'horizontal'
  test('label prop works', () => {
    const wrapper = mount(ShareTools, {
      propsData: {
        label: label
      }
    })
    // check if prop works
    expect(wrapper.props().label).toBe(label)
    // check if it was rendered correctly
    const div = wrapper.find('.c-share-tools__label')
    expect(div.text()).toContain('The Label')
  })

  test('layout prop works', () => {
    const wrapper = shallowMount(ShareTools, {
      propsData: {
        layout
      }
    })
    // check if prop was passed correctly
    const div = wrapper.find('.c-share-tools')
    expect(div.attributes('class')).toContain(layout)
  })

  test('slot works', () => {
    const wrapper = shallowMount(ShareTools, {
      slots: {
        default: AudioIcon
      }
    })
    // check if the component was successfully passed through the slot
    expect(wrapper.findComponent(AudioIcon).exists()).toBe(true)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(ShareTools, {
      propsData: { label },
      slots: {
        default: AudioIcon
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
