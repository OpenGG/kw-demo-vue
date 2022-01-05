<script setup>
// 第一步：引入图标
import '@ks/kw/icon/output/common/iconfont.css';
import IconFont from '@ks/kw/icon/output/common/iconfont.vue';
import IconFontLight from '@ks/kw/icon/output/common/iconfontLight.vue';

// 第二步（可选）：引入颜色
import '@ks/kwcolor/color/output/all/index.css';
import {
    color_base_black_1,
} from '@ks/kwcolor/color/output/all/index.v2.js';
</script>

<template>
    <!--
    size:
      图标尺寸
      可以在 app.css 中统一设好 .svgfont{} 规则
      也可以调用组建时传入 size
    -->
    <IconFont icon="common_base_like_24" class="hello" :size="40" />
    <IconFontLight
        icon="common_base_like_24"
        class="hello1"
        :style="{ color: color_base_black_1 }"
        :size="30"
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