const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportHeight:950,
    viewportWidth: 1550,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
