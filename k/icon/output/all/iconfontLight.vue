<template>
  <IconFont :icon="icon" :darkMode="false" :size="size" />
</template>
<script>
// @ts-nocheck
/* eslint-disable */
import IconFont from "./iconfont.vue";
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 0,
    }
  },
  components: {
    IconFont,
  },
};
</script>