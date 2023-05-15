Cypress setup step by step

1.Download node.js
- Their official website - https://nodejs.org/en/download
2. Create folder inside VS Code Terminal
- mkdir 'Folder name' (Cypress Auotmation)
3. Move to that folder
- cd 'Folder name' (Cypress Auotmation)
4. Create package.json file for new project
- package.json is JSON file that exist at root of JavaScript/Node project and 
it is used for managing the projects dependencies
- To create package.json inside project just run command 'npm -i install' and
click 'Enter' button untill you get to last part and then type 'yes' word and 
click 'Enter' button again
- Now you should see one package.json file successfully created in your project
5. Cypress Installation
- To start installation just run command 'npm install cypress --save-dev' and 
this will also make an entry into your package.json file
6. Now you should have 1 folder and 2 files inside your project
- Files: package-lock.json and package.json
- Folder: node_modules
7. Cypress Test runner
- To run Cypress Test runner just run command 'node_modules/.bin/cypress open'
- Now you should see 'Welcome to Cypress!' window and you will choose between E2E testing and Component Testing but
since this is QA Automation project then choose E2E testing and Component Testing is for developers
- On 'Configuration files' Page just click 'Continue' button with all checkboxes checked 
- Choose browser on which you want to run your Cypress Test runner and click on 'Start E2E testing' button







