import pkg from 'gulp';
import sass from 'gulp-sass';
import nodeSass from 'sass';
import autoPrefixer from "gulp-autoprefixer";
import gulpCleanCss from "gulp-clean-css";
import terser from "gulp-terser";

const { src, dest, series, watch } = pkg;
const scss = sass(nodeSass);

//стили
const styles = () => src('./frontend/src/styles/**/*.scss')
  .pipe(scss())
  .pipe(autoPrefixer())
  .pipe(gulpCleanCss())
  .pipe(dest('./frontend/dist/styles/'));

const scripts = () => src('./frontend/src/scripts/**/*.js')
  .pipe(terser())
  .pipe(dest('./frontend/dist/scripts/'));

const taskWatch = () => watch(
  ['./frontend/src/styles/**/*.scss', './frontend/src/scripts/**/*.js'],
  series(styles, scripts)
);

export default series(styles, scripts, taskWatch);
