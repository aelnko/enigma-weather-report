import gulp from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'sass';
import autoPrefixer from "gulp-autoprefixer";
import gulpCleanCss from "gulp-clean-css";
import terser from "gulp-terser";
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import {deleteAsync} from 'del';

const scss = sass(nodeSass);
const browser = browserSync.create();

// верстка
const html = () => gulp.src('./frontend/src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('./frontend/dist/'))
  .pipe(browser.stream());

// стили
const styles = () => gulp.src('./frontend/src/styles/**/*.scss')
  .pipe(scss())
  .pipe(autoPrefixer())
  .pipe(gulpCleanCss())
  .pipe(gulp.dest('./frontend/dist/styles/'))
  .pipe(browser.stream());

// скрипты
const scripts = () => gulp.src('./frontend/src/scripts/**/*.js')
  .pipe(terser())
  .pipe(gulp.dest('./frontend/dist/scripts/'))
  .pipe(browser.stream());

// сервер
const server = () => {
  browser.init({
    server: {
      baseDir: './frontend/dist/'
    },
  });
};

// вотчер
const taskWatch = () => gulp.watch([
  './frontend/src/styles/**/*.scss',
  './frontend/src/scripts/**/*.js',
  './frontend/src/*.html',
],
  gulp.series(html, styles, scripts)
);

// очистка
const clean = () => deleteAsync('./frontend/dist');

server();

export default gulp.series(clean, styles, scripts, html, taskWatch);
