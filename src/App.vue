<template>
  <div>
    <Nav :anchors="$options.anchors" />
    <DemoIcons id="demoIcons" />
    <DemoColors id="demoColors" />
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import DemoIcons from './DemoIcons/DemoIcons.vue';
import DemoColors from './DemoColors/DemoColors.vue';

const anchors = [
  {
    id: '#demoIcons',
    text: '图标演示'
  },
  {
    id: '#demoColors',
    text: '颜色演示'
  }
];

export default {
  anchors,
  components: {
    Nav,
    DemoIcons,
    DemoColors
  }
};
</script>

<style>
h1 {
  font-size: 20px;
  line-height: 1.2;
}
h2 {
  font-size: 18px;
  line-height: 1.2;
}
</style>