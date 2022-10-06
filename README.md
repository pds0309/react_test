# react_test

react test

<br>

### [Section1](/color-button/)

간단한 버튼 색상 상태 변화 컴포넌트를 TDD로 구현하기

- RED -> GREEN -> BLUE 방식으로 개발해보기
- Function Test, Unit Test 경험해보기
- RTL의 `render` , `screen` 을 통해 컴포넌트 테스트하고 Jest로 `Assertion` 하는 흐름 파악하고 적절한 요소찾기 및 검증 메소드 사용해보기
- jest `describe` 를 통해 단위 케이스 묶음 테스트하기 (junit nested 같은거)

<br>

### [Section2]()

**아이스크림 앱 만들기**

[readme](/icecreams/README.md)

<br>

활용

- es6
- react18.2.0
- axios
- jest, react testing-library, msw 
- react-bootstrap


<br>

앱 시나리오 요약

- 맛과 토핑 데이터는 서버로부터 가져온다.
- 사용자가 아이스크림 맛(scoop)과 토핑(topping)을 선택해 주문 요청을 할 수 있다.
- 주문은 서버로 전송된다.
- 앱 구동 시에는 lambda로 만든 api를 사용하지만 테스팅 시에는 mock api를 사용한다.

<br>

주요 학습사항

- 복잡한 사용자 상호작용들을 테스트하기.
- 비동기 업데이트 테스팅
- `user-event` 라이브러리로 테스팅에 이벤트 반영하기
- 적절한 `screen` 쿼리 메소드 사용해보기
- MSW(Mock Service Worker) 를 통해 서버 응답을 Mocking 하여 컴포넌트 테스팅 하기
- 백엔드 서버 에러 응답에 대한 핸들링 해보기
- `Jest Mock` 으로 컴포넌트 테스팅 시 불필요 프로퍼티 mocking 하기
- 전체적 앱 흐름 Happy path 테스팅하기: testing library, cypress

<br>

TODO

- [X] `cypress` e2e 테스트 해보기

- [ ] `cypress` 와 `msw` 를 연동해 e2e 테스트 시 api mocking 하기(잘 안되는중)

<br>


### Section3

[readme](/todos/README.md)

**todo 앱 만들기**

- todo 목록을 추가할 수 있다.
- todo 목록을 볼 수 있다.
- todo 목록을 제거할 수 있다.

<br>

연습사항

- typescript 사용해 개발
- storybook 활용해보기



<br>
<br>
