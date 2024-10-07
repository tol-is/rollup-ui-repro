import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import jsx from 'acorn-jsx';


export default {
  input: {
    potato: 'src/potato/index.tsx',
    tomato: 'src/tomato/index.tsx',
    broccoli: 'src/broccoli/index.tsx',
  },
  output: [
    {
      dir: './dist',
      format: 'es',
      sourcemap: true,
      exports: 'named',
      entryFileNames: '[name].jsx',
      chunkFileNames: '[name]-[hash].js',
    },
  ],
  acornInjectPlugins: [jsx()],
  plugins: [
    resolve({ extensions: ['.css'] }),
    commonjs(),
    typescript({
      compilerOptions: { jsx: 'preserve' },
      exclude: ['**/*.stories.tsx', '**/*.test.*'],
    }),
    postcss({
      modules: true,
      extract: true,
      inject: true,
    }),
  ],
  external: ['react', 'react-dom', 'next', 'classnames', 'next/dynamic'],
};
