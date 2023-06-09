#### Saju

### 운정원

--- 
사주 web application

- 생년월일(시) 입력시 사주8글자 확인 (open api 사용하여 로딩시간이 있을 수 있습니다.)

[https://aloha-jh.github.io/vue-saju/](https://aloha-jh.github.io/vue-saju/)

### 설치

1. npm i 로 관련 패키지 설치

### 실행

개발모드 실행

```
npm run dev
```


빌드

```
npm run build
```

프로덕션 서버 시작

```
npm run start
```

배포
```
npm run generate
```

(기타-)

```
npm run deploy

```

### 폴더 구조

```
├─ assets : 공통으로 사용될 리소스들 - css, image, font
├─ components : 컴포넌트 파일 관리
├─ layouts : 여러 layout 파일 - 기본은 default.vue
├─ middleware : 사용될 middleware들
├─ plugins : 외부 라이브러리 연결
├─ static : 정적 파일들 html
├─ store : 데이터관리 vuex store 사용
├─ pages : 페이지단위 - index.vue 메인
├─ tests : 테스트 관리
├─ .babelrc : babel 설정 파일
├─ .eslintrc.js : eslist 설정 파일
├─ .prettierrc : prettier 설정 파일
├─ nuxt.config.js : nuxt 설정파일
├─ package.json : 의존성 모듈 정의, 프로젝트기본설정, 개발모드실행 및 배포 명령어 설정
├─ README.md

```

### 패키지 설명


-   eslint / prettier

    -   eslint, prettier 패키지 설치
    -   nuxt 관련 의존성 패키지들 설치 (@nuxtjs/eslint-config, @nuxtjs/eslint-module)
    -   parser 패키지(babel/eslint-parser)
    -   plugin 패키지 (eslint-plugin-nuxt, eslint-plugin-vue, eslint-plugin-prettier)
