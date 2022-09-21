# notes-app

## Overview
This is a command line based note-taking application that is capable of adding, removing, storing, listing and reading notes, done as part of Andrew Mead's "The Complete Node.js Developer Course" in Udemy.

This is my first node.js application, and in this project, I learned about the node module system, global modules, file system, command-line args, arrow function, & debugging.

## Process
To run the app, type `node app.js` followed by one of these 4 functions:
  - To add a note: `add title="title" content="content"`
  - To remove a note: `remove title="title"`
  - To list all saved notes: `list`
  - To view a specific note: `read title="title"`

To parse user input, npm module [Yargs](https://www.npmjs.com/package/yargs) was used.  
To save notes in JSON format, in-built node module File System was used.  
To beautify terminal output, npm module [Chalk](https://www.npmjs.com/package/chalk) was used.

## Build Status
There are currently no bugs in this application.

This node.js application will be packaged as a API and connected to a web-based user interface in the near future.




