const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.opencart.com/",
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {},
  },
});
