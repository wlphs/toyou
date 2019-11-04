/**
 * TRP gulp setting
 * Copyright 2019, toughrain@gmail.com
**/
var _debugMode = true,       // 기본 디버그모드
    protNum = 9909,
    gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglifyjs = require('uglify-js'),
    uglifyfier = require('gulp-uglify/composer'),
    uglifyoption = uglifyfier(uglifyjs, console),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-clean-css'),
    lineec = require('gulp-line-ending-corrector'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    fileinclude = require('gulp-file-include'),
    htmlbeautify  = require('gulp-html-beautify'),
    convertEncoding = require('gulp-convert-encoding'),
    fs   = require('fs'),
    path = require('path'),
    del = require('del'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync').create()
    reload = browserSync.reload;


// ---------------------------------
// js 압축 방법 
// ---------------------------------
// function.getFolders
//    drop_console : true,  // (default:false) console.log() 삭제 여부
//    mangle : false,       // (default:ture) 알파벳 한 글자 압축 과정 설정 여부
//    comments : false,     // (default: 'all', true) 모든 주석 보임 , >
//                             license: 라이센스 외 모든주석 삭제, > some : 거의 모든주석 삭제 )
var jsoptions = {  
  debug : {      
    compress: { drop_console : false, },
    mangle: false,
    output: {  beautify: true, comments: 'all' }
  },
  build : {
    compress: { drop_console : true, },
    mangle: true,
    output: {  beautify: true, comments: 'all' }
  }
};


/* 디버그 & 빌드  */
function debugModeFn() {  
  console.log("==== debug Mode start =====")
  return del([ dir.dist_html]);
};
function buildModeFn(){ 
  console.log("==== build Mode start =====")
  _debugMode = false;   
  return del([ dir.dist_html]);
  //return del([ dir.dist_style , dir.dist_scripts, dir.dist_html]);
};


// ---------------------------------
// directory
// ---------------------------------
var pRoot = "root/";                               // 작업 생성될 곳
var dir  = {
  /**  dir.inc   dir.dev_inc
   * pc     : sprite.support_1x.mustache
   * mobile : sprite.support_2x.mustache
   * **/
  template        : 'sprite.support_1x.mustache',
  templateMb      : 'sprite.support_2x.mustache',
  dist_html       : pRoot + "html/"    ,                               // 생성 HTML 
  dist_purehtml   : pRoot + "resources/"     + 'html/',              // 생성 HTML 
  dist_scripts    : pRoot + "resources/"     + 'js/',              // inc => resources 생성 스크립트
  dist_style      : pRoot + "resources/"     + 'css/',             // inc => resources 생성 스타일
  dist_images     : pRoot + "resources/"     + 'images/',          // inc => resources 생성 이미지

  dev_html        : pRoot + "dev_html/" ,                     // 개발 HTML
  dev_style       : pRoot + "dev_inc/"  + 'scss/',            // 개발 스타일
  dev_scripts     : pRoot + "dev_inc/"  + 'js/',              // 개발 스크립트
  dev_images      : pRoot + "dev_inc/"  + 'images/',          // 개발 이미지 느려짐 사용자제
  dev_imagesSp    : pRoot + "dev_inc/"  + 'imagesSp/',        // 개발 스라이스 이미지
};

// ---------------------------------
// Functions 홀더경로 추출함수
// ---------------------------------
// function.getFolders
getFolders = function (dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
};


    // ---------------------------------
    // jQuery 가져 오기 Tasks
    // ---------------------------------
    function jquery(){
      return gulp.src( [ dir.dev_scripts + 'trlibrary/jquery-3.4.1.js'] )
        .pipe(concat('jquery.min.js'))
        .pipe(gulp.dest( dir.dist_scripts + 'library/'));
    };

    // ---------------------------------
    // 플러그인 CSS 합치기 Tasks
    // ---------------------------------
    // task.concatCss
    function libraryConcatCss(){
      return gulp.src([
          dir.dev_scripts + "library/css/*.css"
      ])
      .pipe(concat('csslibrary.css'))
      .pipe(gulp.dest( dir.dist_style + 'library/'))

      //.pipe(sourcemaps.init())
      .pipe(concat('csslibrary.min.css'))
      .pipe(minifyCSS())
      .pipe(lineec())
      //.pipe(sourcemaps.write("./maps"))  // "./maps" 빼면 파일에 내포
      .pipe(gulp.dest( dir.dist_style + 'library/'));
    };

    // ---------------------------------
    // 플러그인 JS 합치기 Tasks
    // ---------------------------------
    // task.concatJs
    function libraryConcatJs(){
      return gulp.src([
          //"bower_components/swiper/dist/js/swiper.min.js",
          dir.dev_scripts + "library/*.js"
      ])
      .pipe(concat('jquerylibrary.js', {newLine: ';'}))
      .pipe(gulp.dest( dir.dist_scripts + 'library/'))

      //.pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(lineec())
      .pipe(concat('jquerylibrary.min.js', {newLine: ';'}))
      //.pipe(sourcemaps.write("./maps"))  // "./maps" 빼면 파일에 내포
      .pipe(gulp.dest( dir.dist_scripts + 'library/'));
    };



//--------------------------------
// Tasks spriteimg  // spritesmith 합치기
//--------------------------------
function spriteimg() {
  // set target folders
  var folders = getFolders(dir.dev_imagesSp + "sprite/");
  var imgStream, cssStream, spriteData;
  var _algorithm = "binary-tree"; // "top-down" , "left-right"

  folders.map(function (folder) {
    spriteData = gulp.src('sprite/' + folder + '/*.png', {cwd: dir.dev_imagesSp + ''})
      .pipe(spritesmith({
        imgPath:   '../' + 'images/common/' + 'sp_' + folder + '.png',
        imgName:   'sp_' + folder + '.png',
        cssName:   '_sp_' + folder + '.scss',
        cssFormat: 'scss',
        algorithm: _algorithm , //top-down, left-right, diagonal, alt-diagonal, binary-tree
        padding:   20,
        cssTemplate: dir.dev_style + 'lib/spritesmith/' + dir.templateMb,   // pc 앞축 방법
        cssVarMap: function(sprite) {
            sprite.name = sprite.name;
            sprite.origin = 'sp_' + folder;
        },
        cssSpritesheetName: 'sp_' + folder
    }));
    imgStream = spriteData.img.pipe(gulp.dest(dir.dist_images + 'common'));
    cssStream = spriteData.css.pipe(gulp.dest(dir.dev_style   + 'lib/spritesmith/'));
  });
  
  return merge(imgStream, cssStream);;
};



// ---------------------------------
// Tasks styles   // sass -> css 변환 common.css
// ---------------------------------
function styles() {
  return gulp.src(dir.dev_style+ "*.scss", { sourcemaps: false })
    .pipe(gulpif( _debugMode, sourcemaps.init() )) // {loadMaps:true}
    // output style is [nested | expanded | compact | compressed]
    .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif( _debugMode, sourcemaps.write("./maps") ))
    .pipe(gulp.dest(dir.dist_style ))    
};


// ---------------------------------
// Tasks cripts  // beble > min.js
// ---------------------------------
function scripts() {
  return gulp.src(dir.dev_scripts+ "*.js", { sourcemaps: true })  
    .pipe(babel())
    .pipe(concat('common.js', {newLine: ';'}))
    .pipe(gulpif( _debugMode, uglifyoption(jsoptions.debug),  uglifyoption(jsoptions.build) ))
    .pipe(gulp.dest(dir.dist_scripts , { sourcemaps: './maps' } ))
};
function scriptsMin() {
  return gulp.src(dir.dist_scripts+ "common.js", { sourcemaps: false })  
    .pipe(uglify())                               // 주석X, 콘솔X, 변수압축O
    .pipe(lineec())                               // 줄끝 검사
    .pipe(rename({extname: ".min.js"}))
    .pipe(gulp.dest(dir.dist_scripts))
    .pipe(minifyCSS()) 
    .pipe(lineec())
    .pipe(rename({extname: ".min.css"}))    
    .pipe(gulp.dest(dir.dist_style ))
};

// ---------------------------------
// Tasks fileincludes    // 파일 인크루드
// ---------------------------------
function fileincludes() {
  var options = {
      indentSize: 4, 
      indent_with_tabs: false
  };
  return gulp.src([ dir.dev_html + '**/*.html', '!'+dir.dev_html + 'include/**/*.html'], {base : dir.dev_html})
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))    
  .pipe(htmlbeautify(options))
  .pipe(gulpif( _debugMode, convertEncoding({to: 'utf-8'}),  convertEncoding({to: 'euc-kr'}) ))
  .pipe(gulp.dest(dir.dist_html))
  
};


function watch() {
  gulp.watch( [dir.dev_scripts      + 'library/**/*'] , gulp.series(debugModeFn, gulp.parallel(jquery, libraryConcatCss, libraryConcatJs)) );
  gulp.watch( [dir.dev_imagesSp    + 'sprite/**/*'],  gulp.parallel(spriteimg));   /// spriteimg, iconfonts
  gulp.watch( [dir.dev_style       + '**/*.scss'] , styles);
  gulp.watch( [dir.dev_scripts     + '*.js']      , gulp.series(scripts));
  gulp.watch( [dir.dev_html        + '**/*.html'] , fileincludes);
  gulp.watch( [dir.dist_scripts + '**/*.js', dir.dist_images + 'common/*.*', dir.dist_style + '**/*.css', dir.dev_html + '**/*.html'])
    .on('change', reload);
}


function browser(){
  return browserSync.init({
    server: pRoot,
    port: protNum,
    open: "external"
  });
};


/*
 *`gulp.series`와`gulp.parallel`을 사용하여 태스크가 직렬 또는 병렬로 실행
 */
var base        = gulp.series( gulp.parallel(jquery, libraryConcatCss, libraryConcatJs), gulp.parallel(spriteimg) , scripts, gulp.parallel(styles,  fileincludes) );  /// spriteimg

var debug       = gulp.series(debugModeFn, fileincludes);
var build       = gulp.series(buildModeFn);

var publishing  = gulp.series(build, base,  gulp.parallel(watch, browser) ); 
var bs          = gulp.series(debug, gulp.parallel(watch, browser) ); 
/*
 * CommonJS`exports` 모듈 표기법을 사용하여 작업을 선언
 * exports.cleanFile = cleanFile;
 */
exports.base = base;
exports.styles = styles;
exports.scripts = scripts;
exports.spriteimg = spriteimg;

exports.fileincludes = fileincludes;

exports.build = build;
exports.debug = debug;

/*
* 배포 버젼    (모든 tasks를 실행)    : gulp
* 디버그 버젼  (디버그모드 watch 실행) : gulp bs
*/
gulp.task('default', publishing);   // == exports.default = publishing;
gulp.task('bs', bs );               // == exports.bs = bs;