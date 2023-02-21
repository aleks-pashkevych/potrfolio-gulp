import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/assets/images/`,
    fonts: `${buildFolder}/assets/fonts/`
  },

  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scripts: `${srcFolder}/script/main.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/assets/images/**/*.{jpg, jpeg, png, gif, webp}`,
    svg: `${srcFolder}/assets/svg/**/*.svg`,
    svgIcons: `${srcFolder}/assets/svgIcons/*.svg`
  },

  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scripts: `${srcFolder}/script/**/*.js`,
    styles: `${srcFolder}/scss/**/*.scss`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/assets/images/**/*.{jpg, jpeg, png, svg, gif, webp}`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `127.0.0.1`
};
