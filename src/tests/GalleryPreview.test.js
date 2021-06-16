import { mount, shallowMount } from '@vue/test-utils'
import { describe, test, expect } from '@jest/globals'
import GalleryPreview from '../components/GalleryPreview'
import { toHaveNoViolations } from 'jest-axe'
import axe from './axe-helper'

expect.extend(toHaveNoViolations)

describe('GalleryPreview', () => {
  const count = 19
  const galleryUrl = 'http://www.google.com'
  const variation = 'gothamist'
  const images = [
    {
      url: 'http://placehold.it/640x500?text=1',
      template: 'http://placehold.it/%width%x%height%?text=1',
      thumbnail: 'http://placehold.it/150x150?text=1',
      alt: 'alt 1',
      caption: 'caption 1',
      credit: '1 ( AP Photo/Carolyn Kaster )',
      creditUrl: 'http:///www.google.com'
    },
    {
      url: 'http://placehold.it/640x500?text=2',
      template: 'http://placehold.it/%width%x%height%?text=2',
      thumbnail: 'http://placehold.it/150x150?text=2',
      alt: 'alt 2',
      caption: 'caption 2',
      credit: '2 ( AP Photo/Carolyn Kaster )',
      creditUrl: 'http:///www.google2.com'
    }
  ]
  test('count prop works', () => {
    const wrapper = mount(GalleryPreview, {
      propsData: {
        count,
        galleryUrl,
        images
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.gallery-preview-view-all-count')
    expect(div.text()).toContain(count)
  })

  test('images prop works', () => {
    const wrapper = mount(GalleryPreview, {
      propsData: {
        count,
        galleryUrl,
        images
      }
    })
    // check if prop works and was rendered correctly
    expect(wrapper.find('.image-with-caption img').attributes().src).toBe(images[0].template.replace('%width%', '661').replace('%height%', '496'))
    expect(wrapper.find('.gallery-preview-image').attributes().src).toBe(images[0].template.replace('%width%', '106').replace('%height%', '106'))
    expect(wrapper.find('.gallery-preview-image').attributes().alt).toBe(images[0].alt)
    expect(wrapper.find('.image-with-caption img').attributes().alt).toBe(images[0].alt)
    expect(wrapper.find('.image-with-caption-caption').text()).toBe(images[0].caption)
    expect(wrapper.find('.image-with-caption-credit').text()).toBe(images[0].credit)
    expect(wrapper.find('.image-with-caption a').attributes().href).toBe(images[0].creditUrl)
  })

  test('variation prop works', () => {
    const wrapper = mount(GalleryPreview, {
      propsData: {
        count,
        galleryUrl,
        images,
        variation
      }
    })
    // check if prop works and was rendered correctly
    const div = wrapper.find('.' + variation)
    expect(div.exists()).toBe(true)
  })

  test('link attribute works', () => {
    const wrapper = shallowMount(GalleryPreview, {
      attrs: {
        count,
        galleryUrl,
        images
      }
    })
    // check if prop works and rendered correctly
    expect(wrapper.find('.gallery-preview-view-all').attributes().href).toBe(galleryUrl)
  })

  test('it passes basic accessibility tests', async () => {
    const wrapper = mount(GalleryPreview, {
      propsData: {
        count,
        galleryUrl,
        images
      }
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })

  test('numberOfImages is set correctly on mobile width', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 400
    })
    const wrapper = mount(GalleryPreview, {
      propsData: {
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
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600
    })
    const wrapper = mount(GalleryPreview, {
      propsData: {
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
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1000
    })
    const wrapper = mount(GalleryPreview, {
      propsData: {
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
      propsData: {
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
      propsData: {
        count,
        galleryUrl,
        images
      }
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.activeImage).toBe(images[0])
  })

  test('setActiveImage function works', async () => {
    const wrapper = mount(GalleryPreview, {
      propsData: {
        count,
        galleryUrl,
        images
      }
    })
    await wrapper.vm.$nextTick()
    wrapper.vm.setActiveImage(1)
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.activeIndex).toBe(1)
    expect(wrapper.vm.activeImage).toBe(images[1])
  })
})
