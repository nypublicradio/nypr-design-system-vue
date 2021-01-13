<template>
  <div class="on-todays-show">
    <div class="l-grid l-grid--2up l-grid--1up--large l-grid--large-gutters">
      <h2 class="on-todays-show-title">
        On Today's Show
      </h2>
    </div>
    <div class="l-grid l-grid--2up l-grid--1up--large l-grid--large-gutters">
      <div class="on-todays-show-left l-grid--order-1-large">
        <p class="on-todays-show-headline">
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi culpa cupiditate dolore eos eveniet.</a>
        </p>
        <v-spacer size="triple" />
        <segment-list>
          <segment-list-item
            v-for="(segment, index) in segments.slice(0, segmentsToShow)"
            :key="index"
            :title="segment.title"
            :url="segment.url"
            :new-window="segment.newWindow"
          />
          <v-button
            v-if="segments.length > segmentsToShow"
            label="show more"
            class="u-space--top"
            @click="segmentsToShow=segments.length"
          />
          <v-button
            v-else
            label="show less"
            class="u-space--top"
            @click="collapseSegments"
          />
        </segment-list>
      </div>
      <div class="on-todays-show-right l-grid--order-2-large">
        <image-with-caption
          alt-text="image alt text"
          image="https://placehold.it/506x327"
          width="506"
          height="327"
          caption="This is the caption lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elitlorem ipsum dolor sit amet, consectetur adipiscing elit"
          credit="( AP Photo/Carolyn Kaster )"
          credit-url="http:///www.google.com"
        />
        <div class="dots" />
      </div>
    </div>
    <v-spacer size="triple" />
    <div
      class="on-todays-show-person-social-wrapper"
      :data-person-count="people.length"
    >
      <ul class="on-todays-show-person-list">
        <li
          v-for="(host, index) in people"
          :key="index"
          class="on-todays-show-person-item"
        >
          <v-person
            class="on-todays-show-person"
            :name="host.name"
            :name-link="host.nameLink"
            :image="host.image"
            :role="host.role"
          />
        </li>
      </ul>
      <share-tools
        class="on-todays-show-social"
        label="Connect with the show!"
        layout="vertical"
      >
        <share-tools-item
          service="facebook"
          username="WNYC"
        />
        <share-tools-item
          service="twitter"
          username="WNYC"
        />
        <share-tools-item
          service="instagram"
          username="WNYC"
        />
        <share-tools-item
          service="youtube"
          username="UCbysmY4hyViQAAYEzOR-uCQ"
        />
      </share-tools>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnTodaysShow',
  components: {
    ImageWithCaption: () => import('../components/ImageWithCaption'),
    SegmentList: () => import('../components/SegmentList'),
    SegmentListItem: () => import('../components/SegmentListItem'),
    ShareTools: () => import('../components/ShareTools'),
    ShareToolsItem: () => import('../components/ShareToolsItem'),
    VButton: () => import('../components/VButton'),
    VSpacer: () => import('../components/VSpacer'),
    VPerson: () => import('../components/VPerson')
  },
  data () {
    return {
      segments: [
        {
          title: 'A Lawsuit Demanding Reparations, 100 Years After the Tulsa Race Massacre',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item Number Two with no link!',
          url: '',
          newWindow: true
        },
        {
          title: 'Item number 3',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item number 4',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item number 5',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item number 6',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item number 7',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item number 8',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item number 9',
          url: 'http://www.google.com',
          newWindow: true
        },
        {
          title: 'Item number 10',
          url: 'http://www.google.com',
          newWindow: true
        }
      ],
      segmentsToShow: 3,
      people: [
        {
          image: 'https://placehold.it/120x120',
          name: 'Alison Stewart',
          nameLink: 'http://example.com',
          role: 'Host'
        },
        {
          image: 'https://placehold.it/120x120',
          name: 'Andrew Cuomo',
          nameLink: 'http://example.com',
          role: 'Guest'
        },
        {
          image: 'https://placehold.it/120x120',
          name: 'Andrew Cuomo',
          nameLink: 'http://example.com',
          role: 'Guest'
        }
      ]
    }
  },
  mounted () {
    if (window.innerWidth > 850) {
      this.segmentsToShow = 6
    }
  },
  methods: {
    collapseSegments () {
      if (window.innerWidth > 850) {
        this.segmentsToShow = 6
      } else {
        this.segmentsToShow = 3
      }
    }
  }
}
</script>

<style lang="scss">
.o-icon {
  border: none;
  fill: RGB(var(--color-text));
  z-index: 10;
}

.o-icon:hover {
  fill: RGB(var(--color-text));
  opacity: var(--opacity-hover);
}

.on-todays-show .dots {
  display: none;
  @include media(">medium") {
    display: block;
  }
}

.on-todays-show-person-social-wrapper {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @include media(">medium") {
    flex-direction: row;
  }
}

.on-todays-show-person-social-wrapper[data-person-count="1"] {
  flex-direction: row;
}

.on-todays-show-person-social-wrapper[data-person-count="1"] .on-todays-show-social {
  height: 124px;
}

.on-todays-show-person-list {
  position: relative;
  flex: 1 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  row-gap: 24px;
  justify-items: center;
  padding-bottom: 48px;
  @include media(">medium") {
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    flex-basis: 280px;
    max-width: 280px;
  }
  @include media(">860px") {
    flex-basis: 560px;
    align-self: center;
    max-width: 560px;
  }
}

.on-todays-show-person-social-wrapper .on-todays-show-social {
  border-left: 1px solid rgba(234, 239, 240, 0.5);
  padding-left: 24px;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  @include media(">medium") {
    height: 124px;
    align-self: center;
    flex: 1 0 200px;
    padding-left: 48px;
    margin-top: 0;
  }

  .c-share-tools__label {
    flex-basis: auto;
  }
}

.on-todays-show-person-item {
  display: inline-block;
  list-style: none;
  width: 160px;
  @include media(">medium") {
    width: 280px;
  }
}

.on-todays-show-person.card.person-card {
  list-style: none;
  width: 160px;
  max-width: 160px;
  @include media(">medium") {
    width: 280px;
    max-width: 280px;
  }
}

[data-person-count="1"] .on-todays-show-person-list {
  align-self: center;
  flex-basis: 160px;
  max-width: 160px;
  padding-bottom: 0;
  @include media(">medium") {
    flex-basis: 280px;
    max-width: 280px;
  }
}

[data-person-count="1"] .on-todays-show-social {
  align-self: center;
}

</style>
