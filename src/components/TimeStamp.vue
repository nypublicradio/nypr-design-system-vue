<template>
  <div class="time-stamp">
    {{ date1 }} <template v-if="date2"><span class="time-stamp-seperator">{{ dateSeperator }}</span>{{ date2Label }} {{ date2 }}</template>
  </div>
</template>

<script>
export default {
  name: "TimeStamp",
  props: {
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
    dateSeperator: {
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

.time-stamp-seperator{
    margin:0 var(--space-2);
}
</style>
