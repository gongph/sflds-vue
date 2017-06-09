(function(){
  'use strict'

  var gulp = require('gulp'),
      header = require('gulp-header'),
      uglify = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      rollup = require('rollup-stream'),
      buble = require('rollup-plugin-buble'),
      vue = require('rollup-plugin-vue2'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      rename = require('gulp-rename'),
      pkg = require('./package.json'),
      banner = [
        '/**',
        ' * <%= pkg.name %> <%= pkg.version %>',
        ' * <%= pkg.description %>',
        ' * ',
        ' * Copyright <%= date.year %>, <%= pkg.author %>',
        ' * ',
        ' */',
        ' '].join('\n')

    gulp.task('dist', function (cb) {
      rollup({
        entry: './src/index.js',
        plugins: [vue(), buble()],
        format: 'umd',
        moduleName: 'SfldsVue',
        useStrict: false,
        sourceMap: true
      })
      .pipe(source('sflds-vue.js', './src'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(header(banner, {
        pkg: pkg,
        date: (function(){
        	return {
        	  year: new Date().getFullYear()
        	}
        })()
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/'))
      .on('end', function () {
        gulp.src('./dist/sflds-vue.js')
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(header(banner, {
              pkg: pkg,
              date: (function(){
              	return {
              	  year: new Date().getFullYear()
              	}
              })()
            }))
            .pipe(rename('sflds-vue.min.js'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/'))
            .on('end', function () {
              cb()
            })
      })
    })
})()