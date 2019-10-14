function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`
  };
}

/**
 * toBe
 * 숫자, 문자 텍스트 비교
 */
test("test is toBe()", () => {
  expect(1).toBe(1);
});

/**
 * toEqual
 * 객체 비교
 */
test("test is toEqual()", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`
  });
});

/**
 * toMatch
 * 정규식 비교
 */
test("test is toMatch()", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});

/**
 * toBeFalsy, toBeTruthy
 * true, false 값 비교
 */
test("test is toBeFalsy & toBeTruthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

/**
 * toHaveLength, toContain
 * 배열 길이, 배열 요소 비교
 */
test("test is toHaveLength & toContain (not)", () => {
  const colors = ["Red", "Yellow", "Blue"];

  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});
