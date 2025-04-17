# Cypress-automation-tests
🧪 Cypress Automation for Magento Demo

This project contains automated UI test cases for the Magento Demo Website using Cypress, Page Object Model (POM), Mochawesome reports, environment variables, and external test data.

📁 Folder Structure

cypress/
├── e2e/
│   ├── pages/               # Page Object Model files
│   └── tests/               # Test scripts (A–D)
├── fixtures/                # Test data
├── reports/                 # Mochawesome HTML reports
├── support/                 # Custom Cypress commands
.env                         # Environment variables
cypress.config.js            # Cypress config with reporter
README.md

🔧 Setup & Installation

1. Clone the repository

git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

2. Install dependencies

npm install

3. Add environment variables

Create a .env file at the root:

CYPRESS_email=testuser@yopmail.com
CYPRESS_password=Test@123

⚠️ Make sure to add .env to your .gitignore.

🚀 How to Run the Tests

Run tests in interactive mode (Cypress UI)

npx cypress open

Choose a test from the UI and run it in your browser.

Run tests in headless mode (with Mochawesome report)

npx cypress run

This will run all test files in headless mode using the Electron browser.

📊 Generate and View Test Report

Mochawesome HTML report is generated after headless run.

Run tests:

npx cypress run

Open the report:

mochawesome-report/mochawesome.html

📚 Test Cases Automated

Test Case

Description

Steps

A

Registration flow with login validation

1. Navigate to the registration page2. Fill out user details from users.json3. Submit the form4. Assert successful registration5. Log out, then log in using the same credentials6. Assert user is redirected to dashboard

B

Place order with multiple products (check price calculations)

1. Visit product pages (via POM)2. Add 2 different products to cart3. Go to checkout4. Enter shipping address from fixtures5. Select shipping method6. Place order7. Validate "Thank you for your purchase!" and verify calculated price (unit × quantity = subtotal)

C

Add products to wishlist and checkout from wishlist

1. Hover over product and click “Add to Wishlist”2. Navigate to wishlist page3. Move product to cart from wishlist4. Proceed to checkout5. Complete the address and shipping details6. Validate success message and order

D

Search and validate product results

1. Use the search bar (data-driven from fixture)2. Submit the search3. Assert that relevant products appear4. Optionally, click and validate individual product pages

🧪 How to Add More Tests

Add test data to cypress/fixtures/users.json

Create new test files in cypress/e2e/tests/

Reuse or add new page objects in cypress/e2e/pages/

🌐 Base URL

The tests run against:🔎 https://magento.softwaretestingboard.com/

Set in cypress.config.js:

baseUrl: 'https://magento.softwaretestingboard.com'

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss.

