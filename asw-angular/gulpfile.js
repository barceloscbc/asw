'use strict';

const gulp = require('gulp');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const sass = require('gulp-ruby-sass');


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
    runSequence('watch', 'clean', 'copy', 'sass', cb);
});

/* Realiza copia de arquivos para distribuição */
gulp.task('copy', function() {
    /* Copia arquivos staticos para pasta destino */
    gulp.src([bases.app + '.html', bases.app + '.js']).pipe(gulp.dest(bases.dist.base));
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
    sass(bases.app + '.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest(bases.dist.css))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(bases.app, ['default']);
});