<template>
  <form
    aria-hidden="true"
    role="search"
    class="search-bar"
    :action="action"
    method="get"
  >
    <label
      for="search"
      class="is-vishidden"
    >
      {{ placeholder }}
    </label>
    <input
      id="search"
      name="q"
      :placeholder="placeholder"
      class="search-input"
      type="search"
    >
    <v-button>
      <search-icon />
    </v-button>
  </form>
</template>

<script>
import SearchIcon from '../components/icons/SearchIcon'
import VButton from '../components/VButton'

export default {
  name: 'VSearch',
  components: {
    SearchIcon,
    VButton
  },
  props: {
    action: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Search'
    }
  }
}
</script>

<style lang="scss">
.search-bar {
  --search-height: 48px;
  display: flex;
  width: 250px;
}

.search-bar .search-input {
  border: solid 1px RGB(var(--color-button));
  height: var(--search-height);
  line-height: var(--search-height);

  &::placeholder {
    color: RGB(var(--color-gray));
  }
}

.search-bar .button {
  width: var(--search-height);
  height: var(--search-height);
}
</style>
