# 원티드 프론트엔드 코딩 테스트
## 프로젝트 개요
`시바견의, 시바견에 의한, 시바견을 위한` 사이트를 완성하고자 합니다.
시바견 이미지 리스트를 보여주는 페이지를 완성하세요.

### 요구사항
  * 현재 보여지고 있는 뷰에서 페이지의 끝까지 왔을 때 그 다음 시바견 list를 불러와야 합니다.
  * Reponsive한 UI를 생성해야 됩니다.
  * 프로그램은 오류 없이 작동되어야 합니다.
  * 문제를 어떻게 해결했는지에 README.md 파일에 설명을 추가해주세요.

### 세부 요구 사항
  * 한 번에 20개의 시바견 이미지를 불러오세요.
  * 시바견 이미지 리스트는 `GET /data.json`으로 제공 됩니다. js 코드 안에서 직접 `data.json`을 임포트하지 말고 http 리퀘스트를 이용해서 데이터를 받아와야 합니다.
  * Desktop view(>= 768px)에서는 한 열당 네 개의 시바견 이미지가 보여야 합니다.
  * Mobile view(< 768px)에서는 한 열당 한 개의 시바견 이미지가 보여야 합니다.
  * 시바견 이미지의 비율을 유지한 채로 보여줘야 합니다.
  * eslint warning이나 error가 없어야 합니다.
  * CSS 관련 라이브러리는 사용하지 않아야 합니다. (ex. 부트스트랩, 매터리얼ui 등)
  * UI 디자인 기본 사항은 아래 그림 참고하세요.
  ![UI example](https://s3.ap-northeast-2.amazonaws.com/wanted-public/sample.jpg)

## Scripts
### `yarn run start` or `npm run start`
해당 명령어를 실행할 경우 [http://localhost:3000](http://localhost:3000) 브라우저에 열립니다.

해당 페이지를 참고하며 프로젝트를 완성해주세요.

### 기타 사항
이 프로젝트는 create-react-app (CRA)에 기초해 있습니다. 되도록 eject를 하지 않고 프로젝트를 진행해주세요.
프로젝트를 확장을 원하실 경우 CRA에 있는 다양한 툴을 사용하셔도 무방합니다.
혹시 질문 사항이 있으신 경우 코딩 과제 메일의 참조 주소를 통해 질문해주시면됩니다.

### 참고
  * [Wanted news page](https://www.wanted.co.kr/news)
  * [Create react app](https://facebook.github.io/create-react-app/)

### 문제 해결 방법
  * 이 섹션에 문제를 해결한 방법을 적어주세요.
