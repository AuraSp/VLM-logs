<a name="readme-top"></a>

<div align="center">
 <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Flog-file-1530519-1291836.png&f=1&nofb=1&ipt=b5140b54eb3ea0ed317623e3a356feae82073848b6173ae6ac0b6e2f0ce46911&ipo=images" alt="Logo" width="80" height="80">

  <h3 align="center">VLM shelves movements</h3>

  <p align="center">
    Reports for failed VLM shelves movements
  </p>
</div>

<details>
<summary>Table of contents</summary>
  
<ul>
<li>
<a href="#description">Description</a>
</li>
    <li>
      <a href="#requirements-to-run-the-application">Requirements</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#nodejs--npm">Getting Node.js/NPM</a> (***skip this, if Node.js and npm is installed***)</li>
        <li><a href="#project">Project Cloning</a></li>
        <li><a href="#run-the-application">Running Application</a></li>
      </ul>
    </li>
</ul>
  
</details>


## Description
With the help of custom logging configuration, get transactions that remains under 'Failed' state. 

<p align="right">(<a href="#readme-top">Back to top</a>)</p>


## Requirements To Run The Application
[![JS][JS]][JS-url]\
[![Node][Node.js]][Node-url]\
[![NPM][NPM]][NPM-url]\
[![GIT][GIT]][GIT-url]

<p align="right">(<a href="#readme-top">Back to top</a>)</p>


## :hammer_and_wrench: Used Languages and Development Tools :
##### Languages:
- [![JS][JS]][JS-url]

##### Logger:
- [![CustomLog][CustomLog]][CustomLog-url]

##### Runtime environment for JavaScript used:
- [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">Back to top</a>)</p>


## Getting Started
###### *Node.js / NPM*
```
# To be able to run application using Node Package Manager, you need to have runtime environment
 - Choose your platform and download source code/pre-built installer
 - Do not make any changes in Custom Setup
https://nodejs.org/en/download

# Open your terminal/command prompt to check Node.js and NPM version
node -v /or/ node --version
npm -v /or/ npm --version
```
###### *Project*
```
# Clone the project
git clone https://github.com/AuraSp/VLM-logs.git

# Enter cloned directory
cd VLM-logs
```
###### *Run The Application*
```
1. Inside VLM directory open terminal/command prompt
 - Install needed dependencies for `XML Parser` to work
npm i /or/ npm install

2. Execute script using Node JS or NPM
 - Node JS
 node index.js
 - NPM
 npm run dev
```
<p align="right">(<a href="#readme-top">Back to top</a>)</p>

###### **Log folder will be created after running the script using NPM. If needed, it can be opened like regular text file**

 [Node.js]: https://img.shields.io/badge/Node.js-6DA55F?&style=for-the-badge&logo=node.js&logoColor=#689f63
 [Node-url]: https://nodejs.org/en/
 [NPM]: https://img.shields.io/badge/Npm-fff?style=for-the-badge&logo=npm
 [NPM-url]: https://www.npmjs.com/
 [GIT]: https://img.shields.io/badge/Git-%23F05033?style=for-the-badge&logo=git&logoColor=white
 [GIT-url]: https://git-scm.com/
 [JS]: https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=yellow
 [JS-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
 [CustomLog]: https://custom-icon-badges.demolab.com/badge/Logger-white?style=for-the-badge&logo=customlogger
 [CustomLog-url]: helper/logger.js
 
