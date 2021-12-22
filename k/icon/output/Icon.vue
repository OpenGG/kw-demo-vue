<template>
  <svg
    v-if="type === svg"
    xmlns="http://www.w3.org/2000/svg"
    class="svgfont"
    :class="[id, darkMode ? `${id}-dual` : '']"
    aria-hidden="true"
    focusable="false"
  >
    <use :xlink:href="`#${id}`" />
  </svg>
  <picture v-else>
    <source
      v-if="darkMode && config[2]"
      :srcset="config[2]"
      media="(prefers-color-scheme: dark)"
    />
    <img class="svgfont" :class="id" aria-hidden="true" :src="config[1] || config[2]" />
  </picture>
</template>
<script>
// @ts-nocheck
/* eslint-disable */
const png = 1;
const svg = 0;
const xmlns = 'http://www.w3.org/2000/svg';
let rootSVG;
let rootSheet;
let rootRuleMedia;
const getRootRules = () => {
    if (!rootSheet) {
        const rootStyle = document.createElement('style');
        rootStyle.textContent = '.kid-root-svg{position:absolute;width:0px;height:0px;overflow:hidden}.svgfont{fill:currentColor}@media(prefers-color-scheme:dark){}';
        (document.head || document.documentElement).appendChild(rootStyle);
        rootSheet = rootStyle.sheet;
        rootRuleMedia = rootSheet.cssRules[rootSheet.cssRules.length - 1];
    }
    return [rootSheet, rootSheet.cssRules.length - 1, rootRuleMedia, rootRuleMedia.cssRules.length];
};
const getRootSVG = () => {
    if (rootSVG) {
        return rootSVG;
    }
    rootSVG = document.createElement('svg');
    rootSVG.className = 'kid-root-svg';
    rootSVG.setAttribute('aria-hidden', 'true');
    (document.body || document.documentElement).appendChild(rootSVG);
    return rootSVG;
};
const injectSymbol = (id, config) => {
    if (document.getElementById(id)) {
        return;
    }
    const root = getRootSVG();
    const [sheet, sheetInsertAt, ruleMedia, ruleMediaInsertAt] = getRootRules();
    const [, , content, colorLight, colorDark] = config;
    const el = document.createElementNS(xmlns, 'symbol');
    el.setAttribute('viewBox', '0 0 1024 1024');
    el.id = id;
    el.innerHTML = content;
    root.appendChild(el);
    sheet.insertRule(`.${id}{color:${colorLight}}`, sheetInsertAt);
    if (colorDark) {
        ruleMedia.insertRule(`.${id}-dual{color:${colorDark}}`, ruleMediaInsertAt);
    }
};
export default {
  props: {
    config: {
      type: Array,
      required: true,
    },
    darkMode: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    id() {
      const [, k] = this.config;
      return `svg-${k}`;
    },
    type() {
      const [type] = this.config;
      return type;
    },
  },
  data() {
    return {
      svg,
    };
  },
  mounted() {
    if (this.type === svg) {
      injectSymbol(this.id, this.config);
    }
  },
};
</script>