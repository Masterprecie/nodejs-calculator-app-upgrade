import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: 'src/calculator.ts',
    outDir: 'build',
    platform: 'node',
    minify: true,
});
