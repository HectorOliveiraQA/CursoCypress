/* eslint-disable no-unused-vars */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 769,
    },
    defaultCommandTimeout: 75000,
    setupNodeEvents(on, config) {
    },
  },
  projectId: 'qc7cyq'

})
