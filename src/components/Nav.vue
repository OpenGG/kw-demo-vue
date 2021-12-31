<script setup>
const {
  anchors,
  active,
} = defineProps({
  anchors: {
    type: Array,
    required: true
  },
  active: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="nav">
    <div
      class="nav-tab"
      v-for="anchor in anchors"
      :key="anchor.id"
      :class="{
        'nav-tab-active': active === anchor.id
      }"
      @click="$emit('change', anchor.id)"
    >{{ anchor.text }}</div>
  </div>
</template>


<style scoped>
.nav {
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.nav-tab {
  flex: 0 1 auto;
  padding: 10px 5px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
}

.nav-tab-active {
  border-color: #099;
}
</style>>