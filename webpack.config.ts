import webpack from 'webpack'
import { buildWebpaqckConfig } from "./config/build/buildWebpaqckConfig";
import { BuildPaths } from './config/build/types/config';
import path from 'path';



const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpaqckConfig({
  mode: 'development',
  paths: paths,
  isDev: isDev
})
export default config;

