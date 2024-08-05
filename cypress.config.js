/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: true,

  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    requestTimeout: 30000,
    responseTimeout: 30000,

    env: {
      viewportWidthBreakpoint: 769,
      MAILSLURP_API_KEY: '5164d53a1d0b6444c27ca5e9159d8b8467ed3f297466db873411337d60c0706c'
    },
    defaultCommandTimeout: 75000,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
  projectId: 'qc7cyq'

})
