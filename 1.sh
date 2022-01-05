rm vite.config.ts.out
viteConfig=`ls vite.config.*`
sed -e 's|defineConfig({|defineConfig({\n  server: process.cwd() === "/sandbox" \&\& {\n    hmr: {\n      port: 443\n    }\n  },|' $viteConfig > $viteConfig.out
