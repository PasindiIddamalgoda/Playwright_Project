# Assignment 1: Singlish to Sinhala Translation Testing
**Registration Number:** IT23762640


## Project Overview
This project contains automated test cases for the [Swift Translator](https://www.swifttranslator.com/) application using **Playwright**. The tests verify how accurately the system converts Singlish input into Sinhala output, including positive, negative, and UI test scenarios.


## Prerequisites
Make sure you have the following installed on your computer before proceeding:

- **Node.js** (version 18 or above) — Download from [https://nodejs.org](https://nodejs.org)
- **npm** — This comes installed automatically with Node.js


## Installation
Follow these steps to set up the project on your machine:

**Step 1:** Clone this repository by opening Command Prompt and running:
```bash
git clone https://github.com/IT23762640/IT23762640.git
```

**Step 2:** Navigate into the project folder:
```bash
cd IT23762640
```

**Step 3:** Install all project dependencies (this will install Playwright and other required packages listed in `package.json`):
```bash
npm install
```

**Step 4:** Install the Playwright browsers (Chromium, Firefox, WebKit):
```bash
npx playwright install
```


## Project Structure

IT23762640/
├── tests/
│   └── translatorAssignment_spec.js   # All test cases (positive, negative, UI)
├── playwright-report/                  # Auto-generated HTML test report
├── test-results/                       # Auto-generated test result files
├── package.json                        # Project dependencies and scripts
├── package-lock.json                   # Locked dependency versions
├── playwright.config.js                # Playwright configuration
├── .gitignore                          # Files excluded from Git
└── README.md                           # This file
```


## Running the Tests

### Run all tests:
```bash
npx playwright test
```

### Run tests and see results in the browser report:
```bash
npx playwright test --reporter=html
```

### View the report after tests have finished:
```bash
npx playwright show-report
```


## Test Summary

Positive Functional - 24  Tests where the translator is expected to convert correctly 
Negative Functional - 10 Tests where the translator is expected to fail or behave incorrectly 
UI Test - 1 Tests real-time output updating while typing 



## How the Tests Work

- **Positive tests** — The test enters Singlish text into the input field, waits for the Sinhala output to generate automatically, and then checks if the actual output matches the expected Sinhala translation. If they match, the test passes.

- **Negative tests** — The test enters edge-case inputs (e.g., joined words, slang, all caps, extra spaces) and checks that the actual output does **not** match the ideal expected translation, confirming that the translator struggles with these cases.

- **UI test** — The test types a partial input first to verify real-time conversion is working, then clears and enters the full input to confirm the output updates correctly.

---

## Website Under Test

- **URL:** [https://www.swifttranslator.com/](https://www.swifttranslator.com/)