<img width="746" src="https://user-images.githubusercontent.com/55994508/74997584-07820380-541c-11ea-9355-b1c8bad08032.png" />

# PROJECT 3: GA-SEIR-129 FRONTEND

## Console.love: A Dating and Friendship App for Programmers

[Documentation for Project# 3 Assignment by General Assembly](https://www.notlinkedyet.com)

## Overview

<img width="150" src="https://user-images.githubusercontent.com/55994508/74997584-07820380-541c-11ea-9355-b1c8bad08032.png" /> is a responsive app for lonely software developers looking to connect with each other IRL. Users can create a profile for themselves and have it displayed on the home page for other users to see and match with. Users can also edit their own profiles to update their status.

[Meet your .match()!](http://consoledotlove.herokuapp.com/)

<img width="746" alt="" src="https://user-images.githubusercontent.com/55994508/75056855-6e93cc80-549d-11ea-8083-6cae6038ba59.gif">

## Target Audience

<img width="150" src="https://user-images.githubusercontent.com/55994508/74997584-07820380-541c-11ea-9355-b1c8bad08032.png" /> is for anyone who wants to connect with software engineers!

## Instructions

On the home page, the user may either create a profile or continue as a guest. They will then be taken to the profiles page, where they can view individual profiles! Once a profile is selected, the user can decide whether or not they want to match. Once they click the match button, they'll find out if they were a .match(), and their match's Github link will be revealed!

## The Making of the Application

For our wireframes and other planning info, see our [planning repo](https://github.com/muezzinsarwar/console.love-frontend/tree/master/Planning)

The console.love team used a combination of Centralized and Feature Branch Git Workflows, with an emphasis on pair programming. Responsibilities were distributed roughly as follows:

Jaimie - Project Manager/Scrum Master - Back-end + Testing - Deployment - React Router
<br>
Muezzin - Git Manager - Javascript Guru - Algorithm Wizard
<br>
Rixio - Ideas Guy - CSS Master - Comfortable in React

These responsibilities were chosen based on team members' natural strengths. Each member worked on all aspects of the project, making sure to learn something new. All planning and task tracking was handled through our Trello Team Board.

## Browser View 1

<img width="746" alt="browser view 1" src="https://user-images.githubusercontent.com/55994508/75016880-91988f00-5451-11ea-877b-9515d77bb1eb.png">

## Browser View 2

<img width="746" alt="browser view 2" src="https://user-images.githubusercontent.com/55994508/75017127-08358c80-5452-11ea-8c22-06d890a98f38.png">

## Mobile View 1

<img width="746" alt="mobile view 1" src="https://user-images.githubusercontent.com/55994508/75014664-71b29c80-544c-11ea-8477-312a5880c042.png">

## Mobile View 2

<img width="746" alt="mobile view 2" src="https://user-images.githubusercontent.com/55994508/75014715-8db63e00-544c-11ea-9948-95df67bb084f.png">

## Features

We achieved roughly our silver level of functionality and design, with features including:

-   [ ] App optimized for mobile
-   [ ] Profile pictures randomize on page load
-   [ ] Limit profiles to 10 on load, with button to show 10 more
-   [ ] All API calls switched to fetch method
-   [ ] Colorful CSS, plus a matching logo and favicon
-   [ ] Matching with someone reveals a link to their Github

In the future, we aspire to add the following functionality to reach our gold level:

-   [ ] When a new profile is created, the user is redirected to their newly created profile page
-   [ ] User authentication
-   [ ] Footer or header link to My Profile - if no account, will show a sign up button
-   [ ] Match algorithm based on programming languages in common
-   [ ] Matches are saved in memory
-   [ ] Incorporate GoogleMaps location for profiles/user
-   [ ] Messaging by ID
-   [ ] Refactor with React Hooks

## Technologies used

Functionality:

-   React with React Router for navigation
-   Fetch for API calls (was Axios, but we were unable to achieve full CRUD, so switched to fetch)
-   Lodash for randomization

Testing:

-   Enzyme
-   Jest
-   React Testing Library

Design:

-   CSS Grid

## Contribution Guidelines

- Fork and clone this repo
- Open your terminal and go to the directory you want to store this application and ‘git clone’ it
- Run npm i to install all dependencies
- Run ‘npm run start’ to open the app in browser
- To see data you have to run the [back-end](https://github.com/muezzinsarwar/console.love-backend) for this application as well
- Create changes to the code and if you wish to add a new feature to the currently existing application [submit an issue](https://github.com/muezzinsarwar/console.love-frontend/issues) detailing your changes

## Challenges, Bugs and Fixes

-   Front-end testing with Jest and Enzyme was particularly challenging
-   Couldn't get redirect to newly created profile page to work
-   Match algorithm proved difficult
-   Setting state guest v user

## Sources

Front-end Media:
- [hnet](https://hnet.com/video-to-gif/) for app preview gif

Front-end testing:

-   [Testing API Calls in React](https://medium.com/@manastunga/unit-testing-api-calls-in-react-enzyme-and-jest-133b87aaacb4) enabled us to build successful tests for our more complex components
-   [React Testing Library Common Scenarios](https://rafaelquintanilha.com/react-testing-library-common-scenarios/)
-   [React Testing with Jest and React-testing-library](https://www.youtube.com/watch?time_continue=773&v=3e1GHCA3GP0&feature=emb_logo)
-   [Testing React Components with Jest and Enzyme](https://blog.bitsrc.io/how-to-test-react-components-with-jest-and-enzyme-in-depth-145fcd06b90)

Front-end Framework:

-   [Jennifer Meade's CRUD App example](https://git.generalassemb.ly/seir-129/react-crud-classes) helped us construct our front end

## Acknowledgements

Special thanks to:

-   Hou Chia for his help with Jest/Enzyme testing
-   Jennifer Meade for her invaluable React Crud Classes app
