import path from 'path';
import {PROJECT_ROOT_PATH} from '@shared/config/paths';
import {IS_VUE2} from '../constance';

// 项目根目录
export const projectPath = PROJECT_ROOT_PATH;

// 打包输出目录
export const distPath = path.resolve(
    projectPath,
    'output',
    IS_VUE2 ? 'uni-comps-vue2' : 'uni-comps-vue3',
);

// vr-components 子包的目录
export const packagesPath = path.resolve(projectPath, 'packages');

// builder 目录
export const builderPath = path.resolve(packagesPath, './builder');

// 组件源码目录
export const compsSrcPath = path.resolve(packagesPath, './src');

// 入口文件
export const entryFilePath = path.resolve(compsSrcPath, './index.ts');

// 样式目录
export const stylesPath = path.resolve(compsSrcPath, './styles');