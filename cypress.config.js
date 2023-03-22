const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
  projectId: 'ki7vvh',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: "https://alura-fotos.herokuapp.com",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/mochawesome-report",
      overwrite: true,
      html: true,
      json: false,
      timestamp: "ddmmyyyy_HHMMss",
      charts: true,
      reportTitle: true
    },
  },

});