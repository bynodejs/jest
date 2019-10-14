const userService = require("./userService");
const data = require("./data");

/**
 * beforeEach()
 * 각각의 테스트 함수가 실행도기 전에 실행
 */
beforeEach(() => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );
});

/**
 * atferEach()
 * 각각의 테스트 함수가 실행된 후에 실행
 */
afterEach(() => {
  data.users.splice(0);
});

/**
 * beforeAll()
 * 맨 처음 딱 한번만 호출
 */
beforeAll(() => {
  // conection = openConnection({host: '...', port: '...'});
  console.log("beforeAll");
});

/**
 * afterAll()
 * 맨 마지막 딱 한번만 호출
 */
afterAll(() => {
  console.log("afterAll");
  // conection.close()
});

/**
 * only()
 * 해당 테스트 파일 실행이 only 함수만 실행
 */
test.only("run only", () => {
  // 이 테스트 함수만 실행됨
});

test("not run", () => {
  // 실행 안됨
});

/**
 * skip()
 * 해당 테스트 파일 실행시 skip 함수 제외 실행
 */
test.skip("skip", () => {
  // 이 테스트 함수는 제외됨
});

test("run", () => {
  // 실행됨
});

/**
 * findAll()
 *
 */
test("test is findAll", () => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );

  const users = userService.findAll();

  expect(users).toHaveLength(3);
  expect(users).toContainEqual({ id: 1, email: "user1@test.com" });
  expect(users).toContainEqual({ id: 2, email: "user2@test.com" });
  expect(users).toContainEqual({ id: 3, email: "user3@test.com" });
});

/**
 * create()
 */
test("test is create", () => {
  const user = { id: "4", email: "user4@test.com" };

  userService.create(user);

  expect(data.users).toHaveLength(1);
  expect(data.users).toContainEqual(user);
});

/**
 * destroy()
 */
test("test is destroy", () => {
  data.users.push(
    { id: 1, email: "user1@test.com" },
    { id: 2, email: "user2@test.com" },
    { id: 3, email: "user3@test.com" }
  );

  const id = 3;
  const user = data.users.find(user => user.id === id);

  userService.destroy(id);

  expect(data.users).toHaveLength(2);
  expect(data.users).not.toContainEqual(user);
});

/**
 * 테스트 함수를 그룹화 시켜서 여러개의 테스트를 묶어서 실행
 */
describe("group 1", () => {
  test("test 1-1", () => {
    // ...
  });

  test("test 1-2", () => {
    // ...
  });
});

describe("group 2", () => {
  it("test 2-1", () => {
    // ...
  });

  it("test 2-2", () => {
    // ...
  });
});
