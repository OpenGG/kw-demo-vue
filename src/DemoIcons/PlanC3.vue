<script setup>
// 第一步：引入图标
import '@ks/kw/icon/output/common/iconfont.css';
import IconFont from '@ks/kw/icon/output/common/iconfont.vue';
import IconFontLight from '@ks/kw/icon/output/common/iconfontLight.vue';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import * as colors from '@ks/kwcolor/color/output/all/index.v2.js';
</script>

<template>
  <!--
    size:
      图标尺寸
      可以在 app.css 中统一设好 .svgfont{} 规则
      也可以调用组建时传入 size

    color:
      手动设置 color ，会覆盖掉图标本身颜色
  -->
  <IconFont icon="common_base_like_24" :size="40" class="hello" />
  <IconFontLight
    icon="common_base_like_24"
    :size="30"
    :color="colors.color_base_black_1"
    class="hello1"
  />
</template>


<style lang="less" scoped>
@import "@ks/kwcolor/color/output/all/index.less";
.hello {
    outline: 1px solid @color_base_black_1;
    margin-right: 40px;
}
</style>

<style lang="less" scoped>
.hello1 {
    outline: 1px solid var(--color_base_black_1);
}
</style>