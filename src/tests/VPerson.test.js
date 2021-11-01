import { mount } from '@vue/test-utils'
import { describe, test, expect, jest } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'
import VPerson from '../components/VPerson'

expect.extend(toHaveNoViolations)

expect.extend(toHaveNoViolations)

describe('VPerson', () => {
  // all props once
  const orientation = 'responsive'
  const image = 'https://placehold.it/175x175'
  const video = 'https://www.youtube.com/watch?v=LOS5WB75gkY'
  const imgScale = '70'
  const circle = true
  const animate = true
  const name = 'FirstName LastName'
  const nameLink = 'https://example.com'
  const organization = 'Gothamist'
  const organizationLink = 'https://gothamist.com/'
  const role = 'Subtitle'
  const blurb = 'Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order.'
  const truncate = '2'
  const social = [
    {
      service: 'facebook',
      link: 'https://www.facebook.com/WNYC'
    },
    {
      service: 'twitter',
      link: 'https://twitter.com/WNYC'
    },
    {
      service: 'instagram',
      link: 'https://www.instagram.com/WNYC/'
    },
    {
      service: 'linkedin',
      link: 'https://www.linkedin.com/company/wnyc-radio/'
    },
    {
      service: 'youtube',
      link: 'https://www.youtube.com/channel/UCbysmY4hyViQAAYEzOR-uCQ'
    },
    {
      service: 'email',
      username: 'jchung@nypr.com'
    },
    {
      service: 'site',
      label: 'My site',
      link: 'https://www.google.com'
    }
  ]
  test('it renders props', () => {
    const wrapper = mount(VPerson, {
      propsData: { orientation, image, video, imgScale, circle, animate, name, nameLink, organization, organizationLink, role, blurb, truncate, social },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const orientationProp = wrapper.find('.responsive').exists()
    const imageProp = wrapper.find('.person-image-img')
    const videoHolder = wrapper.find('.video-holder').exists()
    const circleProp = wrapper.find('.circle').exists()
    // const animateProp
    const nameLinkProp = wrapper.find('.person-name-link')
    const nameImageProp = wrapper.find('.person-image-link')
    const roleProp = wrapper.find('.person-role')
    const blurbProp = wrapper.find('.blurbHolder')
    const truncateProp = wrapper.find('.truncate').exists()
    const socialProp = wrapper.find('.social').exists()

    expect(orientationProp).toBe(true)
    expect(circleProp).toBe(true)
    expect(imageProp.attributes('src')).toBe(image)
    expect(videoHolder).toBe(true)
    // imgScale updates the style of nameImageProp, but don't know how to test it

    expect(nameLinkProp.text()).toContain(name)
    expect(nameLinkProp.attributes('to')).toBe(nameLink)
    expect(nameImageProp.attributes('to')).toBe(nameLink)
    expect(roleProp.text()).toContain(role)
    expect(blurbProp.text()).toContain(blurb)
    expect(truncateProp).toBe(true)
    expect(socialProp).toBe(true)
  })

  test('it has details', async () => {
    const wrapper = mount(VPerson, {
      propsData: { image, name, role, blurb, social }
    })
    const hasDetails = wrapper.find('.person-details').exists()
    expect(hasDetails).toBe(true)
  })

  test('it does not have details', async () => {
    const wrapper = mount(VPerson, {
      propsData: { image, video, circle }
    })
    const hasDetails = wrapper.find('.person-details').exists()
    expect(hasDetails).toBe(false)
  })

  test('it is responsive', async () => {
    const wrapper = mount(VPerson, {
      propsData: { orientation, image, imgScale, name, nameLink, role, blurb },
      stubs: ['nuxt-link']
    })
    const responsiveProp = wrapper.find('.responsive').exists()
    expect(responsiveProp).toBe(true)
    jest.spyOn(screen, 'width', 'get').mockReturnValue(375)
    expect(screen.width).toBe(375)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VPerson, {
      propsData: { orientation, image, video, imgScale, circle, animate, name, nameLink, organization, organizationLink, role, blurb, truncate },
      stubs: ['nuxt-link']
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
