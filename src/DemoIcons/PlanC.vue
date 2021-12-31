<script>
// 第一步：引入图标
import '@ks/kw/icon/output/common/iconfont.css';
import IconFont from '@ks/kw/icon/output/common/iconfont.vue';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2.js';

/* 方案C：iconfont 方案，不推荐使用 */
export default {
  color_base_black_1: colors.color_base_black_1,
  components: {
    IconFont
  }
};
</script>

<template>
  <IconFont icon="common_base_like_24" class="hello" />
  <IconFont
    icon="common_base_like_24"
    class="hello1"
    :style="{ color: $options.color_base_black_1 }"
  />
</template>


<style lang="less" scoped>
@import '@ks/kwcolor/color/output/all/index.less';
.hello {
  outline: 1px solid @color_base_black_1;
}
</style>

<style lang="less" scoped>
.hello1 {
  outline: 1px solid var(--color_base_black_1);
}
</style>