module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/
      }
    },
    "jest": {
      diagnostics: {
        pathRegex: /\.(spec|test)\.js$/
      }
    }
  }
};
