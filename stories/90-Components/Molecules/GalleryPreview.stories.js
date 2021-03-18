import GalleryPreview from '../../../src/components/GalleryPreview'

export default {
  title: 'Components/Molecules/GalleryPreview'
}

export const Default = () => ({
  components: {
    GalleryPreview
  },
  template: `
    <div style="width: 640px">
    <gallery-preview
      :count="19"
      :photos="
        [
          {url:'https://cdn.cms.prod.nypr.digital/images/51037144548_69c8fe61a6_k.2e16d0ba.fill-661x496.jpg', alt:'alt 0'},
          {url:'https://cdn.cms.prod.nypr.digital/images/51037144548_69c8fe61a6_k.2e16d0ba.fill-661x496.jpg', alt:'alt 1'},
          {url:'https://cdn.cms.prod.nypr.digital/images/shutterstock_editorial_11799914ac.2e16d0ba.fill-661x496.jpg', alt:'alt 2'},
          {url:'https://cdn.cms.prod.nypr.digital/images/shutterstock_editorial_11799914x.2e16d0ba.fill-661x496.jpg', alt:'alt 3'},
          {url:'https://cdn.cms.prod.nypr.digital/images/shutterstock_editorial_11800031g.2e16d0ba.fill-661x496.jpg', alt:'alt 4'}
        ]
      "
    />
    </div>
  `
})
