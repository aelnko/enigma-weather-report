import gulp from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'sass';
import autoPrefixer from "gulp-autoprefixer";
import gulpCleanCss from "gulp-clean-css";
import terser from "gulp-terser";
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import { deleteAsync } from 'del';

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

// картинки
const images = () => gulp.src('./frontend/src/image/*.png')
  .pipe(imagemin())
  .pipe(gulp.dest('./frontend/dist/image'))
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
const taskWatch = () => {
  server(); // Запуск сервера BrowserSync
  gulp.watch([
    './frontend/src/styles/**/*.scss',
    './frontend/src/scripts/**/*.js',
    './frontend/src/*.html',
    './frontend/src/image/*.png'
  ],
    gulp.series(html, styles, scripts)
  );
};

// очистка
const clean = () => deleteAsync('./frontend/dist');

export const build = gulp.series(clean, styles, scripts, html, images);

export default gulp.series(clean, styles, scripts, html, images, taskWatch);
