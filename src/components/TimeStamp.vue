<template>
  <div class="time-stamp">
    {{ date1Label }} {{ date1 }}
    <template v-if="date2">
      <span class="time-stamp-seperator">{{ seperator }}</span>{{ date2Label }} {{ date2 }}
    </template>
  </div>
</template>

<script>
export default {
  name: "TimeStamp",
  props: {
    date1Label: {
      type: String,
      default: null,
    },
    date1: {
      type: String,
      default: null,
    },
    date2: {
      type: String,
      default: null,
    },
    date2Label: {
      type: String,
      default: null,
    },
    seperator: {
      type: String,
      default: "•",
    },
  },
};
</script>

<style lang="scss">
.time-stamp {
  @include typeface(body, 2);
  font-feature-settings: "lnum";
  color: RGB(var(--color-text));
}

.time-stamp-seperator {
  margin: 0 var(--space-2);
}
</style>
