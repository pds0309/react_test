
## lazyday app - React Query

- 복잡한 앱 구조에서 react-query 사용 연습

- 서버와 통신하는 부분을 제외하고 완성된 앱에 react query 적용하기

<br> 

**server**

- express api 서버

- [ref](https://github.com/bonnie/udemy-REACT-QUERY/tree/main/base-lazy-days/server)

**client**

- 앱


<br>

### 연습사항

**앱 구조를 파악하고 미완성된 서버 데이터 사용되는 부분들을 구현**

- react query 설정 및 로직 분리, 집중화로 컴포넌트 복잡도를 낮추고 사용을 편하게

- `useQuery` `error` 핸들링하기

- `useIsFetching` ,`useIsMutating`  hook을 사용해 패칭 상태 보여주는 기능 집중화 하기

- 적절한 `prefetching` 전략으로 사용자 경험 향상시키기 (껌뻑임 방지, 로딩시간 단축)

- 상황에 맞는 적절한 `refetching` 전략은 무엇일까 생각해보고 설정해보기 (리패칭 옵션, staleTime 등 이용)

- react query로 사용자 인증 구현해보기 (token)

- `useMutation` 다양하게 활용해보기 (성공 시 쿼리 무효화, 캐시 업데이트, 쿼리 롤백, 낙관적 업데이트)

- react query test를 위한 설정 및 react query가 포함된 컴포넌트 렌더링, 동작 테스팅 해보기 (mock api 이용)

<br>

### Ref

- [app](https://github.com/bonnie/udemy-REACT-QUERY/tree/main/base-lazy-days)

- [udemy - react query](https://www.udemy.com/course/react-query-react)

