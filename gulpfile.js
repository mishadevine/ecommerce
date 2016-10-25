var gulp = require('gulp');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var ngAnnotate = require('gulp-ng-annotate');
var wiredep = require('wiredep').stream;

gulp.task('server', function() {
  nodemon({
    script: './src/server.js',
    ext: 'js',
    ignore: ['ng*', 'public*']
  });
});

gulp.task('default', ['server']);
