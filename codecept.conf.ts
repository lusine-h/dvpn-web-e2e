export const config: CodeceptJS.MainConfig = {
  tests: './src/specs/*Spec.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080',
      timeout: 10000,
    },
    AssertWrapper: {
      require: 'codeceptjs-assert',
    },
  },
  include: {},
  name: 'dvpn-web e2e'
}
