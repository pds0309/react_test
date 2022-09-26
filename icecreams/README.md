## 요구사항

### 요약

- OrderEntry 페이지에서 사용자가 주문 정보를 입력한다.
- OrderSummary 페이지에서 사용자 입력에 대한 정보와 소계를 요약하여 리뷰해주며 사용자는 주문 요청을 할 수 있다.
- OrderConfirmination 페이지로 넘어와 주문이 완료되었음을 보여준다.

### OrderEntry Page

사용자의 주문을 받는 페이지로 사용자가 주문 옵션을 선택할 수 있다.

**OrderEntry Component**

- [x] Scoop 및 Topping 목록에 대한 이미지를 렌더링 시킬 수 있다.
- [x] 이미지 api 장애(에러) 응답에 대한 계획을 세우고 에러상황을 테스팅하여 실적용할 수 있다.(`AlertBanner` 컴포넌트 활용)
- [x] 사용자 옵션 선택에 의한 소계를 테스트하고 적용할 수 있다.

**Options Component**

- [x] Scoop 및 Topping 각 옵션에 대한 이미지 api 호출로 이미지가 렌더링 될 것을 mock testing 하고 렌더링 시킬 수 있다.
- [x] Scoop 및 Toppings 사용자 선택 소계 정보를 보여줄 수 있다.

**OrderDetails Provider**

- [x] `useContext`(react context) 를 사용해 `OrderDetails` (선택 소계) 전역 상태를 만들고 사용자 수정/조회 가능하게 `Options` 에 제공해준다.
- [x] `OrderDetailsProvider`의 렌더링이 필요한 테스트에 대해 자동으로 렌더링될 수 있도록 `testing-library` 의 `render` 메소드를 재정의하여 제공한다

<br>

**미션: Toppings 컴포넌트/기능 추가 및 소계 테스팅**

- [x] ToppingOption 컴포넌트를 작성합니다. `Options`에 의해 렌더링 될 컴포넌트이며 `OrderEntry` 컴포넌트에 의해 `Scoops`와 함께 렌더링 될 것입니다.
- [x] Toppings 항목 체크 이벤트를 구성하고 테스트합니다. `Scoops` 처럼 소계정보가 올바르게 출력되어야 합니다.

- 조건: `Options` 에 대한 수정은 발생하지 않아야 합니다.

<br>

**미션: Toppings & Scoops 소계 출력 및 테스팅**

- [x] `OrderEntry` 컴포넌트 에 사용자 Scoop 과 선택값들과, Toppings 체크값들에 대한 총계값에 대한 계산 테스팅 및 출력하기

<br>

### practice

**user-event Library 사용해보기**

- [github: user-event](https://github.com/testing-library/user-event)

> fireEvent 같은 것으로 클릭, 더블클릭, 타입 마우스오버 등 다양한 이벤트 테스트 가능

> fireEvent 보다 사용자 친화적이여서 권장됨

```shell
npm install @testing-library/user-event @testing-library/dom
```

<br>

**screen query method**

구조

> command[All][by]query_type

command

- get: DOM 내부의 것을 expect
- query: DOM 외부의 것을 expect
- find: 요소가 비동기일 경우를 expect

query_type

- Role
- AltText
- Text

![image](https://user-images.githubusercontent.com/76927397/188597550-7a296b93-c0a8-42c0-ac45-c8203f084d9c.png)

<br>

**Custom Render**

- 테스트할 컴포넌트가 상위 컴포넌트에 의존되는 상태일 때 testing-library 의 render를 재정의 해 해당 상위 컴포넌트를 테스트 시 렌더링할 수 있도록 해준다.

<br>

**함수적 테스트로 무엇을 할까**

- 일반적으로는 사이트 외관이 아닌 코드 작동 방식(프로세스)을 검증하는 것임

- 향후 변경될 요소를 기능테스트로 확인한다.

- 정적 페이지 요소에 대한 문제는 `Cypress` 같은 인수테스트의 영역으로 검증함

<br>

**TODO**

- 이벤트 비동기 동작 단언에 대한 처리 best 방식 공부해볼 것 (예를 들어 요소가 사라질 때 `waitForElementToBeRemoved` 를 사용해 제거 된 후 assertion을 하는 것과 단순히 `await` 를 사용해 완료 된 후 assertion 하는 것에 차이가 있는지)

- 테스팅 시 테스트 종료 후 비동기 업데이트로 발생하는 `Unmounted Component` 에러 관련 조사할 것

예시

```
console.error
      Warning: An update to Options inside a test was not wrapped in act(...).

      When testing, code that causes React state updates should be wrapped into act(...):

      act(() => {
        /* fire events that update state */
      });
      /* assert on the output */

      This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
          at Options (D:\board\react_test\react_test\icecreams\src\pages\entry\Options.jsx:11:20)
          at div
          at OrderEntry
          at OrderDetailsProvider (D:\board\react_test\react_test\icecreams\src\contexts\OrderDetails.jsx:40:43)
          at div
          at Container (D:\board\react_test\react_test\icecreams\node_modules\react-bootstrap\cjs\Container.js:24:3)
          at App
```

```
    Warning: Can't perform a React state update on an unmounted component.
```

<br>

### OrderSummary Page

- 입력된 사용자 주문 요약 정보를 보고 사용자가 주문요청 할 수 있다.

**SummaryForm Component**

- [x] 사용자가 이용 동의를 해야만 주문 버튼이 활성화 된다.
- [x] 사용자는 주문 버튼을 클릭하여 주문할 수 있다.
- [x] 마우스 오버 이벤트를 통해 이용약관 정보를 사용자에 제공해줄 수 있다.

<br>

### OrderConfirmation Page

- 사용자가 주문에 성공할 경우 주문번호를 보여준다.

<br>

### App

- [x] 주문요청 -> 주문확인 -> 주문완료 페이지 순서대로 흐를 수 있도록 상태값을 설정하고 상태변경자를 자식 컴포넌트로 넘긴다.

**Set Phase**

- [x] 주문요청 -> 주문확인 -> 주문완료 -> 주문요청(상태값초기화) 페이지까지의 Happy Path Testing을 진행한다.

- [x] Happy Path Testing 을 통과할 수 있도록 각 페이지에서 부모로 부터 받은 phase 변경자를 조작할 수 있게 한다.

<br>

### 추가 테스트/기능

> 전체적인 요구사항만 만족된 상태에서 세부적 요구들을 테스트를 기반으로 추가해나간다.

- [x] npm start 로 실제 앱을 실행할 수 있는 환경을 구성(mock api 가 아닌 실제로 돌려서 확인할 수 있게)

<br>

- [x] Toppings 를 선택하지 않았을 때 `OrderSummary` 페이지에서 Topping 관련 데이터를 보여주지 않는다.
- [ ] 토핑만으로 주문이 불가능하기 때문에 주문하고자하는 아이스크림(scoop) 이 없을 경우에는 주문버튼이 비활성화 상태여야 한다.
- [ ] 비정상적인 `Scoop` 입력에 대한 유효성 검사를 하고 시각적으로 잘못되었음을 보여준다.
- [ ] 비정상적 `Scoop` 입력이 있다면 소계를 적용하지 않는다.
- [ ] 사용자의 주문요청(`post`)이 실패했을 경우 실패 경고 `alert` 를 보여준다.

### ref

- [testing library queries](https://testing-library.com/docs/dom-testing-library/api-queries)
