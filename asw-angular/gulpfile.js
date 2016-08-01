'use strict';

var gulp = require('gulp');
var ngmin = require('gulp-ngmin');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var bases = {
    app: './src/**/*',
    dist: {
        base: './dist/',
        css: './dist/css/',
        plugins: './dist/plugins/'

    },
    lib: './node_modules/'
};


gulp.task('default', function(cb) {
    runSequence('clean', 'copy', 'sass:watch', cb);
});

/* Realiza copia de arquivos para distribuição */
gulp.task('copy', function() {
    /* Compacta arquivos angularJs e copia */
    gulp.src(bases.app + '.js').pipe(ngmin({ dynamic: true })).pipe(gulp.dest(bases.dist.base));
    /* Copia arquivos staticos para pasta destino */
    gulp.src(bases.app + '.html').pipe(gulp.dest(bases.dist.base));
    /* Copia arquivos de api e framework*/
    /* ############ Angular ########### */
    gulp.src(bases.lib + '/angular/*.min.js').pipe(gulp.dest(bases.dist.plugins + '/angular/js/'));
    gulp.src(bases.lib + '/angular-route/*.min.js').pipe(gulp.dest(bases.dist.plugins + '/angular-route/js/'));
    /* ############ Materialize-CSS ########### */
    gulp.src([bases.lib + '/materialize-css/dist/**/*.min.js', bases.lib + '/materialize-css/dist/**/*.min.css']).pipe(gulp.dest(bases.dist.plugins + '/materialize-css/'));
    gulp.src(bases.lib + '/materialize-css/dist/font/**/*.*').pipe(gulp.dest(bases.dist.plugins + '/materialize-css/font'));
    gulp.src(bases.lib + '/materialize-css/dist/fonts/**/*.*').pipe(gulp.dest(bases.dist.plugins + '/materialize-css/fonts'));
    gulp.src(bases.lib + '/materialize-css/dist/fonts/**/*.*').pipe(gulp.dest(bases.dist.plugins + '/materialize-css/fonts'));
    /* ############ JQuery ########### */
    gulp.src(bases.lib + '/jquery/dist/*.min.js').pipe(gulp.dest(bases.dist.plugins + '/jquery/js'));
});


/* Excluir o diretorio de entrega */
gulp.task('clean', function() {
    return gulp.src(bases.dist.base).pipe(clean());
});

gulp.task('sass', function() {
    gulp.src(bases.app + '/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(bases.dist.css));
});
gulp.task('sass:watch', function() {
    return gulp.watch(bases.app + '/sass/**/*.scss', ['sass']);
});