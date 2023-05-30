module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  roots: ["<rootDir>"],
  testRegex: "(/tests/jest/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
  },
  testEnvironment: "jsdom",
};
