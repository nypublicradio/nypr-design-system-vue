import { mount } from '@vue/test-utils'
import { describe, test, expect, jest } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import VPerson from '../components/VPerson'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

expect.extend(toHaveNoViolations)

// need to mock the IntersectionObserver I am using for detecting when entering the viewport
const mockIntersectionObserver = class A {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    // do nothing
  }

  observe () {
    // do nothing
  }

  unobserve () {
    // do nothing
  }

  disconnect () {
    // do nothing
  }
}
window.IntersectionObserver = mockIntersectionObserver

describe('VPerson', () => {
  // all props once
  const orientation = 'responsive'
  const image = 'https://placehold.it/175x175'
  const imageGIF = 'https://placehold.it/175x175.gif'
  const video = 'https://www.youtube.com/watch?v=LOS5WB75gkY'
  const imgScale = '70'
  const circle = true
  const animate = true
  const fullName = 'FirstName LastName'
  const nameLink = 'https://example.com'
  const organization = 'Gothamist'
  const organizationLink = 'https://gothamist.com/'
  const role = 'Subtitle'
  const blurb = 'Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order.'
  const truncate = '2'
  const social = [
    {
      service: 'facebook',
      profile_url: 'https://www.facebook.com/WNYC'
    },
    {
      service: 'twitter',
      profile_url: 'https://twitter.com/WNYC'
    },
    {
      service: 'instagram',
      profile_url: 'https://www.instagram.com/WNYC/'
    },
    {
      service: 'linkedin',
      profile_url: 'https://www.linkedin.com/company/wnyc-radio/'
    },
    {
      service: 'youtube',
      profile_url: 'https://www.youtube.com/channel/UCbysmY4hyViQAAYEzOR-uCQ'
    },
    {
      service: 'email',
      username: 'jchung@nypr.com'
    },
    {
      service: 'site',
      label: 'My site',
      profile_url: 'https://www.google.com'
    }
  ]
  test('it renders props', () => {
    const wrapper = mount(VPerson, {
      propsData: { orientation, image, video, imgScale, circle, animate, fullName, nameLink, organization, organizationLink, role, blurb, truncate, social }
    })
    // check if prop works and was rendered correctly
    const orientationProp = wrapper.find('.responsive').exists()
    const imageProp = wrapper.find('.person-image-img')
    const circleProp = wrapper.find('.circle').exists()
    // const animateProp
    const nameLinkProp = wrapper.find('.person-name-link')
    const imageLinkProp = wrapper.find('.person-image-link')
    const roleProp = wrapper.find('.person-role')
    const blurbProp = wrapper.find('.blurbHolder')
    const truncateProp = wrapper.find('.truncate').exists()
    const socialProp = wrapper.find('.social').exists()

    expect(orientationProp).toBe(true)
    expect(circleProp).toBe(true)
    expect(imageProp.attributes('src')).toBe(image)
    // imgScale updates the style of imageLinkProp, but don't know how to test it

    expect(nameLinkProp.text()).toContain(fullName)
    expect(nameLinkProp.attributes('href')).toBe(nameLink)
    expect(imageLinkProp.attributes('href')).toBe(nameLink)
    expect(roleProp.text()).toContain(role)
    expect(blurbProp.text()).toContain(blurb)
    expect(truncateProp).toBe(true)
    expect(socialProp).toBe(true)
  })

  test('it has image only', () => {
    const wrapper = mount(VPerson, {
      propsData: { image }
    })
    const imageProp = wrapper.find('.person-image-img')
    const hasDetails = wrapper.find('.person-details').exists()
    expect(imageProp.attributes('src')).toBe(image)
    expect(hasDetails).toBe(false)
  })

  test('image is GIF', () => {
    const wrapper = mount(VPerson, {
      propsData: { image: imageGIF }
    })
    const imageProp = wrapper.find('.person-image-img')
    expect(imageProp.attributes('src')).toBe(imageGIF)
    expect(wrapper.vm.isGIF(imageGIF)).toBeTruthy()
  })

  test('it has image only with link', () => {
    const wrapper = mount(VPerson, {
      propsData: { image, nameLink }
    })
    const imageLinkProp = wrapper.find('.person-image-link')
    const imageProp = wrapper.find('.person-image-img')
    const hasDetails = wrapper.find('.person-details').exists()
    expect(imageLinkProp.attributes('href')).toBe(nameLink)
    expect(imageProp.attributes('src')).toBe(image)
    expect(hasDetails).toBe(false)
  })

  test('it has details', () => {
    const wrapper = mount(VPerson, {
      propsData: { image, fullName, role, blurb, social }
    })
    const hasDetails = wrapper.find('.person-details').exists()
    expect(hasDetails).toBe(true)
  })

  test('it does not have details', () => {
    const wrapper = mount(VPerson, {
      propsData: { image, video, circle }
    })
    const hasDetails = wrapper.find('.person-details').exists()
    expect(hasDetails).toBe(false)
  })

  test('it has details with organization', () => {
    const wrapper = mount(VPerson, {
      propsData: { image, fullName, role, blurb, social, organization, organizationLink }
    })
    const personRole = wrapper.find('.person-role')
    const hasDetails = wrapper.find('.person-details')
    const hasDetailsExists = hasDetails.exists()
    expect(hasDetailsExists).toBe(true)
    expect(personRole.text()).toContain(organization)
  })

  test('it has circle image', () => {
    const wrapper = mount(VPerson, {
      propsData: { image, fullName, role, blurb, circle }
    })
    const circleProp = wrapper.find('.circle').exists()
    expect(circleProp).toBe(true)
  })

  test('it has detail, but no image', () => {
    const wrapper = mount(VPerson, {
      propsData: { fullName, role, blurb, circle }
    })
    const imagePropExists = wrapper.find('.person-image-img').exists()
    const hasDetailsExists = wrapper.find('.person-details').exists()
    expect(imagePropExists).toBe(false)
    expect(hasDetailsExists).toBe(true)
  })

  test('it has truncated blurb', () => {
    const wrapper = mount(VPerson, {
      propsData: { fullName, role, blurb, truncate }
    })
    const truncateExists = wrapper.find('.truncate').exists()
    expect(truncateExists).toBe(true)
  })

  test('it is responsive', () => {
    const wrapper = mount(VPerson, {
      propsData: { orientation, image, imgScale, fullName, nameLink, role, blurb }
    })
    const responsiveProp = wrapper.find('.responsive').exists()
    expect(responsiveProp).toBe(true)
    jest.spyOn(screen, 'width', 'get').mockReturnValue(375)
    expect(screen.width).toBe(375)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(VPerson, {
      propsData: { orientation, image, video, imgScale, circle, animate, fullName, nameLink, organization, organizationLink, role, blurb, truncate }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test('it extracts youtube ID from url', async () => {
    const wrapper = mount(VPerson, {
      propsData: { fullName, role, blurb }
    })
    const id = await wrapper.vm.getYoutubeId('https://www.youtube.com/watch?v=LOS5WB75gkY')
    expect(id).toMatch('LOS5WB75gkY')
  })
})
