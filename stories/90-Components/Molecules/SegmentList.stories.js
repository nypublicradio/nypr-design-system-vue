import SegmentList from '../../../src/components/SegmentList'
import SegmentListItem from '../../../src/components/SegmentListItem'

export default {
  title: 'Components/Molecules/Segment List'
}

export const Default = () => ({
  components: {
    SegmentList,
    SegmentListItem
  },
  template: `
    <segment-list>
    <segment-list-item
      title="A Lawsuit Demanding Reparations, 100 Years After the Tulsa Race Massacre"
      url="http://www.google.com"
    />
    <segment-list-item
      title="Item Number Two!"
      url="http://www.bing.com"
    />
    <segment-list-item
      title="Item Number 33333"
      url="http://www.yahoo.com"
    />
    </segment-list>
  `
})
