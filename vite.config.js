import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [federation({
    name: 'repro',
    filename: 'remoteEntry.js',
    exposes: { './entry': './src/entry.js' },
    shared: {
  "@module-federation/enhanced": {
    "singleton": true
  },
  "@babel/core": {
    "singleton": true
  },
  "@rspack/core": {
    "singleton": true
  },
  "webpack": {
    "singleton": true
  }
},
    dts: false,
  })],
  build: { target: 'es2022', rollupOptions: { external: ["@module-federation/enhanced","@babel/core","@rspack/core","webpack"] } },
});
