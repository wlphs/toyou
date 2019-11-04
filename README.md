# gulp 통합세팅
----

## Initial Setup (gulp4)
1. node.js 설치 (상위버젼 버그 로인한 8.x 버젼 설치 권장) : [node.js]https://nodejs.org/en/download/
2. gulp3.x.x 버젼이면 삭제 후재설치 
3. gulp 삭제            : npm rm -g gulp 
4. gulp 터미널 설치                       : npm install -g gulp-cli
5. package.json(node module) 터미널 설치  : npm install
6. gulpfile.js 작업환경 터널 실행         : gulp 또는 브라우져씽크 까지 gulp bs


## "gulpfile.js" 기능 및 실행방법(터미널실행)
* sass 통합, min.css 추출, sourcemaps생성
* autoprefixer 지원
* js 통합, min.js 추출, sourcemaps생성
* sprite 이미지 통합 `_sp_icons.scss`, `_sp_icons.scss` 파일 생성
* SVG아이콘을 웹폰트 통합 폰트 `_sp_iconfont.scss` 파일 생성
* 이미지 최적화 ~~[사용안함]~~

1. 상단 내용 실행, 실실시간 내용 실행 브라우저 싱크.  (gulp)
2. 실시간 내용 실행 브라우저 싱크.                  (gulp bs)
3. 상단 내용 실행및 배포용 추출.                    (gulp build)


## erro 
- npm --add-python-to-path='true' --debug install --global windows-build-tools 


## Notes
<blockquote>
    "dev_홀더이름"은 작업용홀더 이고 "dev_" 빠진 홀더는 dev_에서 생성된 홀더입니다.
</blockquote>

