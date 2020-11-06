import SegmentList from '../../../src/components/SegmentList'
import SegmentListItem from '../../../src/components/SegmentListItem'
import VButton from '../../../src/components/VButton'

export default {
  title: 'Components/Molecules/Segment List'
}

export const LessThan6 = () => ({
  components: {
    SegmentList,
    SegmentListItem,
    VButton
  },
  data () {
    return {
      segments: [
        {
          title: 'A Lawsuit Demanding Reparations, 100 Years After the Tulsa Race Massacre',
          url: 'http://www.google.com'
        },
        {
          title: 'Item Number Two with no link!',
          url: ''
        },
        {
          title: 'Item number 3',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 4',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 5',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 6',
          url: 'http://www.google.com'
        }
      ],
      segmentsToShow: 6
    }
  },
  template: `
    <segment-list>
    <segment-list-item
      v-for="(segment, index) in segments.slice(0, segmentsToShow)"
      :key="index"
      :title="segment.title"
      :url="segment.url"
    />
    <v-button
      v-if="segments.length > segmentsToShow"
      label="show more"
      @click="segmentsToShow=segments.length"
      class="u-space--top"
    />
    </segment-list>
  `
})

export const MoreThan6 = () => ({
  components: {
    SegmentList,
    SegmentListItem,
    VButton
  },
  data () {
    return {
      segments: [
        {
          title: 'A Lawsuit Demanding Reparations, 100 Years After the Tulsa Race Massacre',
          url: 'http://www.google.com'
        },
        {
          title: 'Item Number Two with no link!',
          url: ''
        },
        {
          title: 'Item number 3',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 4',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 5',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 6',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 7',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 8',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 9',
          url: 'http://www.google.com'
        },
        {
          title: 'Item number 10',
          url: 'http://www.google.com'
        }
      ],
      segmentsToShow: 6
    }
  },
  template: `
    <segment-list>
    <segment-list-item
      v-for="(segment, index) in segments.slice(0, segmentsToShow)"
      :key="index"
      :title="segment.title"
      :url="segment.url"
    />
    <v-button
      v-if="segments.length > segmentsToShow"
      label="show more"
      @click="segmentsToShow=segments.length"
      class="u-space--top"
    />
    </segment-list>
  `
})
