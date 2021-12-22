<template>
  <div>
    <h1>颜色演示</h1>
    <PlanCss />
    <PlanSass />
    <PlanLess />
  </div>
</template>

<script>
import PlanCss from './PlanCss.vue';
import PlanSass from './PlanSass.vue';
import PlanLess from './PlanLess.vue';

export default {
  components: {
    PlanCss,
    PlanSass,
    PlanLess
  }
};
</script>
