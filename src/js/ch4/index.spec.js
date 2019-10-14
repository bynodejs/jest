/**
 * jest.fn().mockReturnValue()
 */
test("Test is mockReturnValue()", () => {
  const mockFn = jest.fn();

  mockFn.mockReturnValue("mockRreturnValue!");
  console.log(mockFn()); // mockRreturnValue!
});

/**
 * jest.fn().mockResolvedValue
 */
test("Test is mockResolvedValue()", () => {
  const mockFn = jest.fn();

  mockFn.mockResolvedValue("mockResolvedValue!");
  mockFn().then(result => {
    console.log(result); // mockResolvedValue!
  });
});

/**
 * jest.fn().mockImplementation()
 */
test("Test is mockImplementation()", () => {
  const mockFn = jest.fn();

  mockFn.mockImplementation(val => `Test is ${val}!`);
  console.log(mockFn("mockImplementation")); // Test is mockImplementation!
});

/**
 * jest.fn().toBeCalled...()
 */
test("Test is toBeCalled...()", () => {
  const mockFn = jest.fn();

  mockFn("a");
  mockFn(["b", "c"]);

  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).toBeCalledWith("a");
  expect(mockFn).toBeCalledWith(["b", "c"]);
});

/**
 * jest.spyOn()
 */
test("Test is jest.spyOn()", () => {
  const calculator = {
    add: (a, b) => a + b
  };

  const spyFn = jest.spyOn(calculator, "add");

  const result = calculator.add(2, 3);

  expect(result).toBe(5);
  expect(spyFn).toBeCalledTimes(1);
  expect(spyFn).toBeCalledWith(2, 3);
});
