<template>
  <div>
    <h1>图标演示</h1>
    <h2>方案A：基于方案 B 改进，支持自动裁剪，推荐使用</h2>
    <PlanA />

    <h2>方案B：散图引用，推荐使用</h2>
    <PlanB />

    <h2>方案C：iconfont 方案，不推荐使用</h2>
    <PlanC />

    <div ref="PlanCDom" />
  </div>
</template>

<script>
import PlanA from './PlanA.vue';
import PlanB from './PlanB.vue';
import PlanC from './PlanC.vue';
import PlanCDom from './PlanCDom.js';

export default {
  components: {
    PlanA,
    PlanB,
    PlanC
  },
  mounted() {
    PlanCDom(this.$refs.PlanCDom);
  }
};
</script>
