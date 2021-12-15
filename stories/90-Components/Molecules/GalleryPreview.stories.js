import GalleryPreview from '../../../src/components/GalleryPreview'

export default {
  title: 'Components/Organisms/Gallery Preview'
}

export const Default = () => ({
  components: {
    GalleryPreview
  },
  template: `
    <gallery-preview
      :count="19"
      gallery-url="http://www.google.com"
      :images="
        [
          {template:'https://cms.demo.nypr.digital/images/8071/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/', thumbnail:'https://via.placeholder.com/150x150.png?text=1', alt:'alt 1',caption:'caption 1',credit:'1 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {template:'https://via.placeholder.com/640x500.png?text=2', thumbnail:'https://via.placeholder.com/150x150.png?text=2', alt:'alt 2',caption:'caption 2',credit:'2 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {template:'https://via.placeholder.com/640x500.png?text=3', thumbnail:'https://via.placeholder.com/150x150.png?text=3', alt:'alt 3',caption:'caption 3',credit:'3 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {template:'https://via.placeholder.com/640x500.png?text=4', thumbnail:'https://via.placeholder.com/150x150.png?text=4', alt:'alt 4',caption:'caption 4',credit:'4 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'}
        ]
      "
    />
  `
})

export const GothamistVariation = () => ({
  components: {
    GalleryPreview
  },
  template: `
    <gallery-preview
      variation="gothamist"
      :count="19"
      gallery-url="http://www.google.com"
      :images="
        [
          {template:'https://via.placeholder.com/640x500.png?text=1', thumbnail:'https://via.placeholder.com/150x150.png?text=1', alt:'alt 1',caption:'caption 1',credit:'1 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {template:'https://via.placeholder.com/640x500.png?text=2', thumbnail:'https://via.placeholder.com/150x150.png?text=2', alt:'alt 2',caption:'caption 2',credit:'2 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {template:'https://via.placeholder.com/640x500.png?text=3', thumbnail:'https://via.placeholder.com/150x150.png?text=3', alt:'alt 3',caption:'caption 3',credit:'3 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'},
          {template:'https://via.placeholder.com/640x500.png?text=4', thumbnail:'https://via.placeholder.com/150x150.png?text=4', alt:'alt 4',caption:'caption 4',credit:'4 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com'}
        ]
      "
    />
  `
})

export const GothamistVariationWithTitlesAndDescriptions = () => ({
  components: {
    GalleryPreview
  },
  template: `
    <gallery-preview
      variation="gothamist"
      :count="19"
      gallery-url="http://www.google.com"
      :images="
        [
          {template:'https://via.placeholder.com/640x500.png?text=1', thumbnail:'https://via.placeholder.com/150x150.png?text=1', alt:'alt 1',caption:'caption 1',credit:'1 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com',title:'Title of Slide 1',description: 'Description 1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
          {template:'https://via.placeholder.com/640x500.png?text=2', thumbnail:'https://via.placeholder.com/150x150.png?text=2', alt:'alt 2',caption:'caption 2',credit:'2 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com',title:'Title of Slide 2',description: 'Description 2 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
          {template:'https://via.placeholder.com/640x500.png?text=3', thumbnail:'https://via.placeholder.com/150x150.png?text=3', alt:'alt 3',caption:'caption 3',credit:'3 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com',title:'Title of Slide 3',description: 'Description 3 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
          {template:'https://via.placeholder.com/640x500.png?text=4', thumbnail:'https://via.placeholder.com/150x150.png?text=4', alt:'alt 4',caption:'caption 4',credit:'4 ( AP Photo/Carolyn Kaster )',creditUrl: 'http:///www.google.com',title:'Title of Slide 4',description: 'Description 4 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        ]
      "
    />
  `
})
