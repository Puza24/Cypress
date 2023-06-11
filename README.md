# Cypress Setup Repository

## Description

This repository contains Cypress web testing framework setup

## Necessities

Install Node modules
- Their official website - https://nodejs.org/en/download

or run command:
```
npm -i install
```
Check Node version, run command: 
```
node -v
```
Install Code Editor

- **Visual Studio Code** is the best

## Cypress Installtion

- Create package.json file for new project, run command:
```
npm -i install
```
- To install Cypress, run command:
```
npm install cypress --save-dev
```

- To run Cypress Test runner, run command:
```
node_modules/.bin/cypress open
```



- Now you should see **Welcome to Cypress!** window and you will choose between **E2E** testing and **Component Testing** but
since this is QA Automation project then choose **E2E** testing because **Component Testing** is for developers
- On **Configuration files Page** just click **Continue** button with all checkboxes checked 
- Choose browser on which you want to run your **Cypress Test runner** and click on **Start E2E testing** button
8. Now in your projects you have 1 new folder and 1 new file added:

**Folder: cypress with 3 additional folders**
- downloads (empty)
- fixtures with file inside 'example.json'
- support with 2 files inside 'commands.js' and 'e2e.js'

**File: cypress.config.js**

9. cypress.config.js SpecPattern
- It is necessary to insert into cypress.config.js path to folder where your test are located so that Cypress can know from which file to execute tests. I made folder **integration** and another folder inside **examples** on my project and because of this my path inside
cypress.config.js will be **SpecPattern: 'cypress/integradion/examples/*.js'**
<img width="649" alt="Screen Shot 2023-05-15 at 16 56 15" src="https://github.com/Puza24/Cypress/assets/106740508/1cdc244a-0c8a-4db4-986c-37b5828bf90d">




