# MaRental

`Group project` `Web Portfolio project`

The project is a Property management web app that helps people to rent or buy property in Narok. 
It demonstrates the knowledge we have gained so far: React, node and Mongo db

### Task - Full Stack webstack portfolio project(MaRental)


alx_africa

The ALX Holberton Software Engineering programme is a 12-month(70h/week) immersive programme that engages technology enthusiasts and budding software engineers in a variety of programmes across in-demand tech disciplines to prepare them for a global career as a Full-Stack Developer.

# Getting Started with MaRental codebase

Follow the steps highlighted below how to get the application running on your local computer

## Prerequiste

    1. Ensure you have `node` with version >=14 installed. To find out about this, Open a command prompt or terminal and type `node -v`
    2. You have cloned the repo from github
    3. You have a text editor (preferably vscode) installed on your computer

## Steps

    1. Open the project folder with your desire code editor
    2. Open a built in terminal without included with your text editor
    3. To install all dependencies used in the project, type in `npm install (dependency-name)` into the open terminal and click enter on your keyboard
    4. To ensure the project is open with rules specific by eslint used in this project, type in `npm run lint` on the terminal
    5. Next, ensure the project files are rightly formatted by typing in `npm run format`
    6. Finally, to start the development server, `npm run start`

At this Point, you should see the application running on a broswer window/tab at [http://localhost:3000]
If you encounter any issues while doing any of the above commands, kindly the sections below on the `available scripts` to find for little more insight.

## Available Scripts

In the project directory(MaRental), you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Checks if files obeys all Eslint set rules properly

### `npm run lint:fix`

This script fixes all possible eslint errors in the project

### `npm run format`

Formats all files using prettier set rules at .prettierrc

### `npm run check:format`

Checks if all files are formatted properly

### `npm run test-all`

Checks if files obeys the Eslint rules and are formatted properly

### Project Structure

`/components`

Components
├──Home
└── Agent
├── Blog
├── About
│ │ ├── About.js
│ │ └── Credibility.js
| | |__ Service.js
| | |__ Team.js
└── contact
├── footer

`components` contains pages shown on the website. It should be structured in a similar way as the router to give you a better understanding of how the real website would be browsed. This is also similar to the Next.js approach.

utils
├── useFetch.js
└── partners.js

`/utils` contains files that deal with logic to fulfill a certain function. They are functional pieces commonly used in many places in the project.

Give a ⭐ if project was helpful

# 📄 License

Copy © 2023.

Project is [MIT] licensed

AUTHORS

 * Osoro Brian **[Github](https://github.com/Osoroobare)**
 * Sankara Aluko **[Github}(https://github.com/Sank-rah)**
  
