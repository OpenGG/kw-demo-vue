const defaultConfig = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
  ],

  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
}

const vueConfig = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'next',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
  }
}

const merge = (target, ...args) => {
  const res = { ...target }

  args.forEach(src => {
    Object.keys(src).forEach(k => {
      const t = target[k]
      const s = src[k]
      const type = typeof t
      if (!t || type !== 'object') {
        res[k] = s
        return
      }

      if (Array.isArray(t)) {
        res[k] = [...t, ...s]
        return
      }

      res[k] = { ...t, ...s }
    })
  })

  return res
}

module.exports = {
  root: true,
  ...merge(defaultConfig),

  overrides: [
    merge(defaultConfig, {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    }),
    merge(defaultConfig, vueConfig, {
      files: ['*3.vue'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
      ],
    }),
    merge(defaultConfig, vueConfig, {
      files: ['*.vue'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
      ],
    })
  ]
};
