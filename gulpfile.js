// $ npm install gulp gulp-jade gulp-less  gulp-imagemin  gulp-concat connect --save-dev

var gulp = require('gulp'), // ����������� Gulp JS
    jade = require('gulp-jade'), // ������ ��� Jade
    less = require('gulp-less'), // ������ ��� Stylus
    imagemin = require('gulp-imagemin'), // ����������� �����������
    concat = require('gulp-concat'); // ������� ������


//  less
gulp.task('less', function() {
    gulp.src('app/css/*.less')

});

// � Jade

    gulp.task('jade', function() {
        gulp.src('app/*.jade')

    });



// JS
    gulp.task('js', function() {
        gulp.src('app/js/*.*')


    });



//  �����������

    gulp.task('images', function() {
        gulp.src('app/img/*')


    });
// font

gulp.task('font', function() {
    gulp.src('app/font/*')


});

gulp.task('audio', function() {
    gulp.src('app/audio/*')


});

// ������ ������� ���������� gulp watch
    gulp.task('watch', function() {
        // ��������������� ������ �������
        gulp.watch('less');
        gulp.watch('jade');
        gulp.watch('images');
        gulp.watch('js');


    });



    gulp.task('build', function() {
        // css
        gulp.src('app/css/*.less')
            .pipe(less())
            .pipe(gulp.dest('dist/css/'));

        // jade
        gulp.src('app/*.jade')
            .pipe(jade({
            pretty: true
        }))  // �������� Jade ������ � ����� app
            .pipe(gulp.dest('dist/'));

        // js
        gulp.src('app/js/*.*')
            .pipe(gulp.dest('dist/js'));



        // image
        gulp.src('app/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'));

        // �����
        gulp.src('app/font/*')
            .pipe(gulp.dest('dist/font'));


    });

gulp.task('default', ['watch']);