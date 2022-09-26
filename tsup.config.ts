import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  splitting: true,
  treeshake: true,
  format: ['cjs', 'esm'],
  dts: true
});
