<template>
  <span
    aria-hidden="true"
    :class="[
      'iconfont-common',
      `icon-${icon}`,
      darkMode ? `icon-${icon}-dual` : '',
    ]"
    ><slot
  /></span>
</template>

<script>
// @ts-nocheck
/* eslint-disable */

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    darkMode: {
      type: Boolean,
      default: true,
    },
  },
};
</script>