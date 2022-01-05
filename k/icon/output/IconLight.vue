<template>
  <Icon :config="config" :darkMode="false" :size="size" />
</template>
<script>
// @ts-nocheck
/* eslint-disable */

import Icon from "./Icon.vue";
export default {
  props: {
    config: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      default: 0,
    }
  },
  components: {
    Icon,
  },
};
</script>