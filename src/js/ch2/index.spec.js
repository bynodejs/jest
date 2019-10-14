function fetchUser1(id, cb) {
    setTimeout(() => {
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com"
      };
      cb(user);
    }, 100);
  }
  
  function fetchUser2(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        const user = {
          id: id,
          name: "User" + id,
          email: id + "@test.com"
        };
        resolve(user);
      }, 100);
    });
  }
  
  /**
   * 콜백 함수 테스트
   * done 함수 인자 사용
   */
  test("test is callback (done)", done => {
    fetchUser1(1, user => {
      expect(user).toEqual({
        id: 1,
        name: "User1",
        email: "1@test.com"
      });
      done();
    });
  });
  
  /**
   * Promise 테스트
   * resolve하는 promise객체를 리턴한다.
   */
  test("test is promise/then", () => {
    return fetchUser2(1).then(user => {
      expect(user).toEqual({
        id: 1,
        name: "User1",
        email: "1@test.com"
      });
    });
  });
  
  /**
   * async/await 테스트
   * 함수 맨앞에 async를 추가하고, promise를 리턴하는 함수 앞에 await를 붙여준다.
   */
  test("test is async/await", async () => {
    const user = await fetchUser2(1);
  
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com"
    });
  });
  