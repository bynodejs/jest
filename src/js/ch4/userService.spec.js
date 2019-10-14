const axios = require("axios");
const userService = require("./userService");

/**
 * callback to findAll()
 */
test("findAll calls the callback function with 10 users", done => {
  const callback = jest.fn((error, users) => {
    expect(users).toHaveLength(10);
    expect(callback).toBeCalledTimes(1);
    done();
  });

  userService.findAll(callback);
});

/**
 * async/await return findOne()
 */
test("findOne returns a user", async () => {
  const user = await userService.findOne(1);

  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Leanne Graham");
});

/**
 * spyOn axios get
 */
test("findOne fetches data from the API endpoint", async () => {
  const spyGet = jest.spyOn(axios, "get");

  await userService.findOne(1);
  expect(spyGet).toBeCalledTimes(1);
  expect(spyGet).toBeCalledWith(`https://jsonplaceholder.typicode.com/users/1`);
});

/**
 * mocking findOne return data axios.get
 */
test("findOne returns what axios get returns", async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: {
      id: 1,
      name: "Dale Seo"
    }
  });

  const user = await userService.findOne(1);

  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Dale Seo");
});
