exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      waitForAction: 1000,
      windowSize: "1280x960",
      pressKeyDelay: 10,
      waitForNavigation: ["networkidle0", "domcontentloaded"]
    },
    MailSlurp: {
      require: '@codeceptjs/mailslurp-helper',
      apiKey: 'fd814cc309d41e4e363d3506b89a559bdd9e5ce64ae9bc05d2651e04ca01114d'
    }    
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  timeout: 1000,
  name: 'at'
}