#### Saju

### 사주

---

### 설치

1. npm i 로 관련 패키지 설치
2. back-end 폴더로 이동후 npm i 로 관련 패키지 설치 후 다시 루트 디렉토리에서 실행

### 실행

개발모드 실행
(nuxt 와 json-server 동시 실행)

```
npm run dev
```

개발모드 실행
(json-server 제외)

```
npm run serve
```

빌드

```
npm run build
```

프로덕션 서버 시작

```
npm run start
```

jest unit test 실행

```
npm run test
```

ESLint 실행

```
npm run lint
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

-   npm-run-all

    -   npm script 여러가지 명령어를 조합해서, 한 명령어로 실행 가능
    -   npm run dev : parallel 옵션을 사용해 json-server, nuxt를 병렬로 실행

<!-- -   swiper , vue-awesome-swiper 패키지 추가되었습니다.

    -   slide banner 사용시 필요한 플러그인 입니다
    -   관련 에러가 뜰경우 설치 바랍니다. -->

-   jest

    -   javascript unit test 라이브러리 설치됨
    -   관련 의존성 패키지들 설치 (babel-jest, babel-preset-env, jest-vue-preprocesser)

-   eslint / prettier

    -   eslint, prettier 패키지 설치
    -   nuxt 관련 의존성 패키지들 설치 (@nuxtjs/eslint-config, @nuxtjs/eslint-module)
    -   parser 패키지(babel/eslint-parser)
    -   plugin 패키지 (eslint-plugin-nuxt, eslint-plugin-vue, eslint-plugin-prettier)
