<template>
  <div class="fact-box">
    <div
      v-if="title"
      class="fact-box-title"
    >
      {{ title }}
    </div>
    <slot />
    <ul
      v-if="listItems"
      class="fact-box-list"
      :class="listType"
    >
      <li
        v-for="(item, index) in listItems"
        :key="index"
        class="fact-box-list-item"
      >
        <span
          v-if="item.time && listType === 'timeline'"
          class="fact-box-list-item-time"
        >
          {{ item.time }}
        </span>
        <span
          class="fact-box-list-item-text"
          v-html="item.text"
        />
      </li>
    </ul>
    <div
      v-if="textBlock"
      class="fact-box-text-block"
      v-html="textBlock"
    />
  </div>
</template>

<script>
export default {
  name: 'FactBox',
  props: {
    listItems: {
      type: Array,
      default: null
    },
    listType: {
      type: String,
      default: 'unordered'
    },
    textBlock: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    variation: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.fact-box {
  padding: 0 var(--space-4);
  border: solid 1px RGB(var(--color-black));
}

.fact-box .fact-box-title,
.fact-box .fact-box-list,
.fact-box .fact-box-text-block {
  margin: var(--space-4) 0;
}

.fact-box .fact-box-title {
  @include typeface(header, 5);
}

.fact-box .fact-box-list,
.fact-box .fact-box-text-block {
  @include typeface(body, 4);
}

.fact-box .fact-box-list {
  list-style-position: inside;
}

.fact-box .fact-box-list.unordered {
  list-style-type: disc;
}

.fact-box .fact-box-list.ordered {
  list-style-type: decimal;
}

.fact-box .fact-box-list.ordered .fact-box-list-item-text {
  margin-left: var(--space-2);
}

.fact-box .fact-box-list.timeline {
  margin-left: 0;
  list-style-type: none;
}

.fact-box .fact-box-list-item {
  margin-bottom: var(--space-2);
  font-weight: bold;
}

.fact-box .fact-box-list-item-text {
  font-weight: normal;
}

.fact-box .fact-box-list-item-time {
  margin-right: var(--space-3);
}
</style>
