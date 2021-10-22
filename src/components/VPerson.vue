<template>
  <div
    class="person"
    :class="[hasDetails ? 'has-details' : '', image ? '' : 'no-image', vertical ? 'vertical' : '']"
  >
    <template v-if="nameLink && image">
      <nuxt-link
        class="person-link"
        :class="[circle ? 'circle' : '']"
        :to="nameLink"
        :style="{'width':imgScale+'%'}"
        aria-hidden="true"
        role="presentation"
        tabindex="-1"
        @click="$emit(' componentEvent', nameLink)"
      >
        <span
          v-if="image"
          v-html="theVisualAsset"
        />
      </nuxt-link>
    </template>
    <template v-else>
      <span
        v-if="image"
        style="justify-self: center;"
        :style="{'width':imgScale+'%'}"
        v-html="theVisualAsset"
      />
    </template>
    <div
      v-if="hasDetails"
      class="person-details"
    >
      <div
        v-if="name"
        role="heading"
        aria-level="3"
      >
        <nuxt-link
          v-if="nameLink"
          class="person-name-link"
          :to="nameLink"
          @click="$emit(' componentEvent', nameLink)"
        >
          <span v-html="name" />
        </nuxt-link>
        <template v-else>
          <span v-html="name" />
        </template>
      </div>
      <span
        v-if="role"
        class="role"
        v-html="role"
      />
      <span
        v-if="blurb"
        class="blurb"
        @click="readMore = !readMore"
        v-html="truncBlurb"
      />

      <share-tools class="social">
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
import ShareTools from './ShareTools'
import ShareToolsItem from './ShareToolsItem'

/**
 * A component for displaying details about a person
 */
export default {
  components: {
    ShareTools,
    ShareToolsItem
  },
  props: {
    /**
     *  A URL pointing to an image of the person.
     */
    image: {
      type: String,
      default: null
    },
    /**
     *  adds a circle mask around the visual asset.
     */
    circle: {
      type: Boolean,
      default: false
    },
    /**
     *  Full name of the person.
     */
    name: {
      type: String,
      default: null
    },
    /**
     *  A URL pointing to the person's bio page.
     */
    nameLink: {
      type: String,
      default: null
    },
    /**
     *  The person's role or job. e.g. Host, Guest, Author, etc.
     */
    role: {
      type: String,
      default: null
    },
    /**
     *  Information about the author. e.g. "Jen is a blah blah..." etc.
     */
    blurb: {
      type: String,
      default: null
    },
    /**
     *  maxium characters to show when truncarted, defulat is 90 characters
     */
    truncate: {
      type: [Boolean, String],
      default: false
    },
    /**
     *  social account array
     */
    social: {
      type: Array,
      default: null
    },
    /**
     *  for a stacked vertical layout, string = breakpoint to turn vertical
     */
    vertical: {
      type: [Boolean, String],
      default: false
    },
    /**
     *  % the image will scale in its container
     */
    imgScale: {
      type: String,
      default: '100'
    }
  },
  data () {
    return {
      readMore: false
    }
  },
  computed: {
    hasDetails () {
      return !!this.role || !!this.blurb || !!this.social || !!this.name
    },
    theVisualAsset () {
      return `
        <img
          class="person-image"
          src="${this.image}"
          alt="${this.name}"
          role="presentation"
          loading="lazy"
          decoding="async"
        />
    `
    },
    truncBlurb () {
      if (this.truncate) {
        const truncValue = this.truncate === true ? 90 : Number(this.truncate)
        if (this.readMore) {
          return this.blurb + '<a class="read-more">READ LESS</a>'
        } else {
          return (
            this.blurb.substring(0, truncValue) +
            '...' +
            '<a class="read-more">READ MORE</a>'
          )
        }
      } else {
        return this.blurb
      }
    }
  }
}
</script>

<style lang="scss">
.person {
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  color: RGB(var(--color-text));
  &.has-details {
    grid-template-columns: 1fr 3fr;
  }
  &.no-image {
    grid-template-columns: 1fr;
  }
  &.vertical {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    text-align: center;
    justify-items: center;
    .person-details .social {
      justify-self: center;
      margin-left: 0;
    }
  }
  .person-link {
    align-self: start;
    justify-self: center;
    width: 100%;
    &.circle {
      border-radius: 100%;
      overflow: hidden;
    }
  }
  .person-image {
    width: 100%;
    height: auto;
  }
  .person-details {
    padding: 0 var(--space-3);
    display: grid;
    color: RGB(var(--color-text));
    font-family: var(--font-family-body);
    .person-name-link {
      color: RGB(var(--color-text));
      font-weight: var(--font-weight-header);
      font-size: var(--font-size-7);
      line-height: var(--line-height-2);
      overflow-wrap: anywhere;
      word-break: break-word;
      text-decoration: none;
    }

    .role {
      text-transform: uppercase;
      font-weight: var(--font-weight-header);
      font-size: var(--font-size-3);
      line-height: var(--line-height-2);
      overflow-wrap: anywhere;
      word-break: break-word;
      letter-spacing: 1.6px;
    }

    .blurb {
      margin-top: var(--space-1);
      font-weight: var(--font-weight-body);
      font-size: var(--font-size-4);
      line-height: var(--line-height-1);
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .social {
      margin-top: var(--space-2);
      margin-left: -16px;
    }

    .read-more {
      word-break: keep-all;
      cursor: pointer;
      color: RGB(var(--color-text));
      font-size: var(--font-size-2);
      letter-spacing: 0.6px;
    }
  }
}
</style>
