//const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     env: {
//       userEmail: 'example@email.com',
//       userPassword: 'testpass123'
//     }
//   }
// });
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com', // ✅ Your Magento site base URL
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here if needed
    },
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
  },
});
