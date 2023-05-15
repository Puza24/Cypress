# Cypress setup step by step

1. Download node.js
- Their official website - https://nodejs.org/en/download
2. Create folder inside VS Code Terminal
- mkdir 'Folder name' eg. (Cypress Auotmation)
3. Move to that folder
- cd 'Folder name' eg. (Cypress Auotmation)
4. Create package.json file for new project
- package.json is JSON file that exist at root of **JavaScript/Node** project and 
it is used for managing the projects dependencies
- To create package.json inside project just run command `npm -i install` and
click **Enter** button untill you get to last part and then type **yes** word and 
click **Enter** button again
- Now you should see one package.json file successfully created in your project
5. Cypress Installation
- To start installation just run command `npm install cypress --save-dev` and 
this will also make a cypress entry into your **package.json** file
6. Now you should have 1 folder and 2 files inside your project
- Files: **package-lock.json** and **package.json**
- Folder: **node_modules**
7. Cypress Test runner
- To run Cypress Test runner just run command `node_modules/.bin/cypress open`
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




