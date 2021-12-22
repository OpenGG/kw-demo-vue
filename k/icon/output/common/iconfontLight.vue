<template>
  <IconFont :icon="icon" :darkMode="false" />
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
  },
  components: {
    IconFont,
  },
};
</script>