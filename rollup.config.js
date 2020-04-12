import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    typescript({
     typescript: require('typescript'),
    })
   ]
};