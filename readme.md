# node.js  安裝
- version : node 8.9.4

- 安裝網址 : https://nodejs.org/en/

- 安裝方式 : 下載安裝 一鍵安裝到底

# ruby 安裝
- version : Ruby 2.4.3-1 (x86) 

- 安裝網址 : https://rubyinstaller.org/

- 安裝方式 : 下載安裝  
  注意事項 :   

# git 安裝
- version : 2.15.1

- 安裝網址 : https://git-scm.com/

- 安裝方式 : 下載安裝 一鍵安裝到底


# sass 安裝
- version : 3.5.3

- 安裝網址 : http://sass-lang.com/install

- 安裝方式 :
  1. Win  
  >Open Ruby command line powershell  
  >Type `gem install sass`  
  
  2. Mac
  > Open your Terminal or Command Prompt  
  > Type `gem install sass` or `sudo gem install sass`


# gulp安裝
- version : 

- 安裝網址 :
`https://www.npmjs.com/package/gulp-cli/tutorial`

- 安裝方式 :
`npm install gulp-cli -g`

# bower 安裝 
- version : 1.8.2

- 安裝網址 : https://bower.io/

- 安裝方式 :
> Type `npm install bower -g`



# CMD 指令

>sudo 管理者權限  
>cd 到下一層目錄  
>cd.. 回到上一層  
>ls    mac查詢指令   
>dir   win 查詢指令  
>node -v  node 版本    
>sass -v  sass 版本  
>gulp -v  gulp 版本    


# 自動化程式gulp 安裝

## 1. gulp 安裝





## 2.gulp-sass



### 安裝網址 
`https://www.npmjs.com/package/gulp-sass`

### 安裝方式 
`npm install gulp-sass --save-dev`

### 使用方式 

```js
//套件引入
var gulp = require('gulp');
var sass = require('gulp-sass');
 
// sass 編譯函式
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss') //來源目錄
    .pipe(sass().on('error', sass.logError)) //經由sass 轉譯
    .pipe(gulp.dest('./css')); //目的地目錄
});

// watch 監看變動函式 
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

//執行函示
gulp.task('default' ,['sass' , 'watch']);

```

### 2.bowsersync


### 安裝網址 
`https://www.npmjs.com/package/gulp-sass`

### 安裝方式 
`npm install browser-sync gulp --save-dev`

### 使用方式 
```js

var browserSync = require('browser-sync'),
    //重新 reload 瀏覽器
    reload      = browserSync.reload;


gulp.task('server', ['sass'], function() {

    browserSync.init({
            server: {
                //根目錄
                baseDir: "./",
                //指定首頁檔案
                index: "index.html"
            }
        });
    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', reload);
});

```
 
 














