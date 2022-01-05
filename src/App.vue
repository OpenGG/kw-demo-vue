
<script setup>
import Nav from './components/Nav.vue';
import DemoIcons from './DemoIcons/DemoIcons.vue';
import DemoIcons3 from './DemoIcons/DemoIcons3.vue';
import DemoColors from './DemoColors/DemoColors.vue';
import { computed, ref } from 'vue';

const anchors = [
  {
    id: 'demoIcons3',
    text: '图标演示 Vue3',
    element: DemoIcons3,
  },
  {
    id: 'demoIcons',
    text: '图标演示 Vue2',
    element: DemoIcons,
  },
  {
    id: 'demoColors',
    text: '颜色演示',
    element: DemoColors,
  },
];

const active = ref(anchors[0].id)

const onChange = (id => {
  active.value = id
})

const Element = computed(() => anchors.find(item => item.id === active.value).element)

</script>

<template>
  <div>
    <Nav :anchors="anchors" :active="active" @change="onChange" />
    <Element />
  </div>
</template>


<style>
h1 {
  font-size: 20px;
  line-height: 1.2;
}
h2 {
  font-size: 18px;
  line-height: 1.2;
}

.svgfont {
  width: 20px;
  height: 20px;
}
</style>