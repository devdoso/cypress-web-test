const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://192.168.1.10:32771',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
