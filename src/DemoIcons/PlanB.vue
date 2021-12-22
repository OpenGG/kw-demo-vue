<template>
  <!-- 传入具体的图标模块，这样可以做到仅打包所使用的图标，避免冗余 -->
  <Icon :config="$options.common_base_like_24" class="hello" />

  <!-- 不推荐做法：在 class 规则 或 style 属性中自定义颜色 -->
  <Icon
    :config="$options.common_base_like_24"
    class="hello1"
    :style="{ color: $options.color_base_black_1 }"
  />
</template>
<script>
// 第一步：引入图标
import Icon from '@ks/kw/icon/output/Icon.vue';
import common_base_like_24 from '@ks/kw/icon/output/common/base/common_base_like_24/index.js';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import { color_base_black_1 } from '@ks/kwcolor/color/output/all/index.v2.js';

export default {
  common_base_like_24,
  color_base_black_1,
  components: { Icon }
};
</script>

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