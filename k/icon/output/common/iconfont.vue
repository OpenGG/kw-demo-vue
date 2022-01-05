<template>
  <span
    aria-hidden="true"
    :class="[
      'iconfont-common',
      `icon-${icon}`,
      darkMode ? `icon-${icon}-dual` : '',
    ]"
    :style="size ? { fontSize: `${size}px` } : null"
  >
    <slot />
  </span>
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
    size: {
      type: Number,
      default: 0,
    }
  },
};
</script>