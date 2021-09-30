module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        "outputDirectory": "reports",
        "outputName": "jest-junit.xml",
        "ancestorSeparator": " › ",
        "uniqueOutputName": "false",
        "suiteNameTemplate": "{filepath}",
        "classNameTemplate": "{classname}",
        "titleTemplate": "{title}"
      }
    ]
  ]
}
