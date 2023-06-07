import pkg from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'sass';
import autoPrefixer from "gulp-autoprefixer";
import gulpCleanCss from "gulp-clean-css";
import terser from "gulp-terser";
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';

const { src, dest, series, watch } = pkg;
const scss = sass(nodeSass);
const browser = browserSync.create();

//верстка
const html = () => src('./frontend/src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('./frontend/dist/'))
  .pipe(browser.stream());

//стили
const styles = () => src('./frontend/src/styles/**/*.scss')
  .pipe(scss())
  .pipe(autoPrefixer())
  .pipe(gulpCleanCss())
  .pipe(dest('./frontend/dist/styles/'))
  .pipe(browser.stream());

//скрипты
const scripts = () => src('./frontend/src/scripts/**/*.js')
  .pipe(terser())
  .pipe(dest('./frontend/dist/scripts/'))
  .pipe(browser.stream());

//открыть браузер
const server = () => {
  browser.init({
    server: {
      baseDir: './frontend/dist/'
    },
  });
};

//вотчер
const taskWatch = () => watch([
  './frontend/src/styles/**/*.scss',
  './frontend/src/scripts/**/*.js',
  './frontend/src/*.html',
],
  series(html, styles, scripts)
);

server();

export default series(styles, scripts, html, taskWatch);
