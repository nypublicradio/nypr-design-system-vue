import { mount } from '@vue/test-utils'
import { describe, test, expect, jest } from '@jest/globals'
import VSearch from '../components/VSearch'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('VSearch', () => {
  const action = 'https://www.google.com'
  const placeholder = 'Search'
  test('action prop works', () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action
      }
    })
    // check if action prop works and was rendered correctly
    const div = wrapper.find('form')
    expect(div.attributes('action')).toBe(action)
  })

  test('placeholder prop works', () => {
    const wrapper = mount(VSearch, {
      propsData: {
        placeholder
      }
    })
    // check if placeholder prop works and was rendered correctly
    const div = wrapper.find('input')
    expect(div.attributes('placeholder')).toBe(placeholder)
  })

  test('closedOnLoad prop works', () => {
    const wrapper = mount(VSearch, {
      propsData: {
        placeholder,
        closedOnLoad: true
      }
    })
    // check if open button exists
    const div = wrapper.find('.button')
    expect(div.exists()).toBe(true)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action,
        placeholder
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test('button opens search when clicked', async () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action,
        placeholder,
        closedOnLoad: true
      }
    })
    // check if input is NOT visible
    expect(wrapper.vm.searchIsOpen).toBe(false)
    // click the open button
    const buttonDiv = wrapper.find('.button')
    buttonDiv.trigger('click')
    await wrapper.vm.$nextTick()
    // check if input is now visible
    expect(wrapper.vm.searchIsOpen).toBe(true)
  })

  test('open and close functions work when closedOnLoad is true', async () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action,
        placeholder,
        closedOnLoad: true
      }
    })
    // check if input is NOT visible
    expect(wrapper.vm.searchIsOpen).toBe(false)
    // trigger the open function
    wrapper.vm.open()
    await wrapper.vm.$nextTick()
    // check if input is now visible
    expect(wrapper.vm.searchIsOpen).toBe(true)
    // trigger the close function
    wrapper.vm.close()
    await wrapper.vm.$nextTick()
    // check if input is now visible
    expect(wrapper.vm.searchIsOpen).toBe(false)
  })

  test('close function works when closedOnLoad is false', async () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action,
        placeholder
      }
    })
    // check if input is visible
    expect(wrapper.vm.searchIsOpen).toBe(true)
    // trigger the close function
    wrapper.vm.close()
    await wrapper.vm.$nextTick()
    // check if input is not visible
    expect(wrapper.vm.searchIsOpen).toBe(false)
  })

  test('submit triggers an emitted event', () => {
    const wrapper = mount(VSearch, {
      propsData: {
        action,
        placeholder
      }
    })

    // trigger the search form to be submitted
    wrapper.find('.search-bar-submit').trigger('click')

    // check that 'searchBarSubmit' was emitted
    expect(wrapper.emitted()).toHaveProperty('searchBarSubmit')
  })

  test('listenToInput function works', async () => {
    jest.useFakeTimers()
    const wrapper = mount(VSearch, {
      propsData: {
        placeholder,
        action,
        closedOnLoad: true
      }
    })
    // trigger the open function
    wrapper.vm.open()
    await wrapper.vm.$nextTick()
    // type something in the input
    const div = wrapper.find('input')
    div.trigger('keypress', {
      key: 'a'
    })
    // wait >6 seconds and then check if the search was closed
    jest.advanceTimersByTime(6500)
    expect(wrapper.vm.searchIsOpen).toBe(false)
  })
})
