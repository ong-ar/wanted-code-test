# 원티드 프론트엔드UI,UX 코딩 테스트
## 프로젝트 개요
데스크탑과 모바일(반응형) 모두를 지원하는 배너 UI모듈을 개발합니다.

### 요구사항
  * VanillaJS, React, Vue를 사용할 수도 있습니다.
  * 브라우져는 >IE10, chrome, FireFox를 지원합니다.
  * 모바일 스크린 너비는 768px 이하를 기준으로 합니다.
  * 슬라이드 관련 CSS, Javascript 플러그인은 사용하지 마세요.

### 기대사항
  * 스펙을 충실히 구현하길 기대합니다.
  * 데스크탑의 마우스 이벤트와 모바일의 터치 이벤트를 효율적으로 핸들링하기를 기대합니다.
  * 이벤트 버블링 및 캡쳐링과 같은 기본적인 이벤트
  * 시스템을 잘 이해하고 있는지 확인하고 효율적으로 DOM을 조작하고 있는지 살펴보겠습니다.
  * 프로그램은 오류 없이 작동되어야 합니다.
  * 문제를 어떻게 해결했는지에 README.md 파일에 설명을 추가해주세요.

### Mock Data
#### Slide Image
`1`
- image : https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/homework/001.jpg
- title : 원티드
- summary : 전 직군 채용 중
- 바로가기 url : https://www.wanted.co.kr


`2`
- image : https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/homework/002.jpg
- title : 네이버
- summary : 전 직군 채용 중
- 바로가기 url : https://www.naver.com


`3`
- image : https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/homework/003.jpg
- title : 카카오
- summary : 전 직군 채용 중
- 바로가기 url : https://www.kakaocorp.com/

### 기타 요구 사항
  * 이 리포지터리를 fork 하여 작업하시면 됩니다.
  * 과제를 완료하신 후 메일로 인사 담당자에게 알려주세요.
  * CSS 관련 라이브러리는 사용하지 않아야 합니다. (ex. 부트스트랩, 매터리얼ui 등)
  * 기타 필요한 라이브러리는 자유롭게 사용하신 후 문제 해결 방법 섹션에 설명으로 적어주세요.
  * 리스트의 UI 디자인 기본 사항은 아래 그림 참고하세요.
  * 진행하시면서 개선 / 문제 해결 / 개선 관련된 내용을 본인 README.MD에 작성해 주세요.

## Scripts
### `yarn run start` or `npm run start`
  * 해당 명령어를 실행할 경우 [http://localhost:3000](http://localhost:3000)를 브라우저에서 볼 수 있도록 해주세요.

  * 해당 페이지를 참고하며 프로젝트를 완성해주세요.[Wanted main page](https://www.wanted.co.kr)

### 기타 사항
React, Vue 둘 중 하나를 선택시 아래 요구 사항대로 진행해 주세요.

#### Vue
  * https://cli.vuejs.org/를 이용하여 프로젝트를 생성 후 진행해 주세요.

#### React
  * create-react-app (CRA)로 진행할 경우 eject를 하지 않고 프로젝트를 진행해주세요.
  * 프로젝트를 확장을 원하실 경우 CRA에 있는 다양한 툴을 사용하셔도 무방합니다.

혹시 질문 사항이 있으신 경우 코딩 과제 메일의 참조 이메일 주소를 통해 질문해주시면 됩니다.

### 스펙
#### PC
![screensh](https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/homework/pc.png)

  * 좌/우측에 배너 이미지를 넘길 수 있는 네비게이션 버튼이 존재한다.

#### Mobile
![screensh](https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/homework/mobile.png)

  * 왼쪽에서 오른쪽으로 터치 스와이프하면 이전 배너이미지로 슬라이드 된다.
  * 오른쪽에서 왼쪽으로 터치 스와이프하면 다음 배너이미지로 슬라이드 된다.

### 공통
  * 반응형으로 구현한다.

