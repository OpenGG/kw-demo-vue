<template>
  <div class="nav">
    <a v-for="anchor in anchors" :key="anchor.id" :href="anchor.id">
      {{ anchor.text }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    anchors: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
}
</style>>