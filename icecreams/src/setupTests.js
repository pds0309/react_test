// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "./mock/server";

// 모든 테스트 시도 전에 API 모킹 서버를 동작 시킴
beforeAll(() => server.listen());

// 테스트 하나 종료 후 request Handler 를 초기화 해 다른 테스트에서 영향을 받지 않게 함
afterEach(() => server.resetHandlers());

// 테스트 종료 후 서버 종료
afterAll(() => server.close());
