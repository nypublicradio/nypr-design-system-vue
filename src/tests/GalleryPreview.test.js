import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import { toHaveNoViolations } from 'jest-axe'
import GalleryPreview from '../components/GalleryPreview'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('GalleryPreview', () => {
  const count = 19
  const galleryUrl = 'https://www.google.com'
  const variation = 'gothamist'
  const images = [
    {
      url: 'https://placehold.it/640x500?text=1',
      template: 'https://placehold.it/%width%x%height%?text=1',
      thumbnail: 'https://placehold.it/150x150?text=1',
      alt: 'alt 1',
      caption: 'caption 1',
      credit: '1 ( AP Photo/Carolyn Kaster )',
      creditUrl: 'https:///www.google.com'
    },
    {
      url: 'https://placehold.it/640x500?text=2',
      template: 'https://placehold.it/%width%x%height%?text=2',
      thumbnail: 'https://placehold.it/150x150?text=2',
      alt: 'alt 2',
      caption: 'caption 2',
      credit: '2 ( AP Photo/Carolyn Kaster )',
      creditUrl: 'https:///www.google2.com'
    }
  ]
  test('count prop works', () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.gallery-preview-view-all-count')
    expect(div.text()).toContain(String(count))
  })

  test('images prop works', () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    expect(wrapper.find('.image-with-caption img.image').attributes().src).toBe(
      images[0].template.replace('%width%', '640').replace('%height%', '426')
    )
    expect(wrapper.find('.gallery-preview-image .image').attributes().src).toBe(
      images[0].template.replace('%width%', '150').replace('%height%', '150')
    )
    expect(wrapper.find('.gallery-preview-image .image').attributes().alt).toBe(
      images[0].alt
    )
    expect(wrapper.find('.image-with-caption img.image').attributes().alt).toBe(
      images[0].alt
    )
    expect(wrapper.find('.image-with-caption-caption').text()).toBe(
      images[0].caption
    )
    expect(wrapper.find('.image-with-caption-credit').text()).toBe(
      images[0].credit
    )
    expect(
      wrapper.find('.image-with-caption-credit-link').attributes().href
    ).toBe(images[0].creditUrl)
  })

  test('everything works even if no images are provided', () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.gallery-preview-view-all-count')
    expect(div.text()).toContain(String(count))
  })

  test('variation prop works', () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images,
        variation
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.' + variation)
    expect(div.exists()).toBe(true)
  })

  test('link attribute works', () => {
    const wrapper = shallowMount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      },
      stubs: ['nuxt-link']
    })
    // check if prop works and rendered correctly
    expect(wrapper.find('.gallery-preview-view-all').attributes('to')).toBe(
      galleryUrl
    )
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test('numberOfImages is set correctly on mobile width', async () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 400
    })
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      }
    })
    // check if it was rendered correctly
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.numberOfImages).toBe(2)
  })

  test('numberOfImages is set correctly on tablet width', async () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 600
    })
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      }
    })
    // check if it was rendered correctly
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.numberOfImages).toBe(3)
  })

  test('numberOfImages is set correctly on desktop width', async () => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      writable: true,
      configurable: true,
      value: 1000
    })
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      }
    })
    // check if it was rendered correctly
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.numberOfImages).toBe(4)
  })

  test('activeIndex initializes to 0', async () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.activeIndex).toBe(0)
  })

  test('activeImage initializes to first image in images array', async () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.activeImage).toStrictEqual(images[0])
  })

  test('setActiveImage function works', async () => {
    const wrapper = mount(GalleryPreview, {
      props: {
        count,
        galleryUrl,
        images
      }
    })
    await wrapper.vm.$nextTick()
    wrapper.vm.setActiveImage(1)
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.activeIndex).toBe(1)
    expect(wrapper.vm.activeImage).toStrictEqual(images[1])
  })
})
