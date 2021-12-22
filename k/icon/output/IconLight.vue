<template>
  <Icon :config="config" :darkMode="false" />
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
  },
  components: {
    Icon,
  },
};
</script>