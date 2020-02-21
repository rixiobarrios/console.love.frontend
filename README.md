<img width="746" src="https://user-images.githubusercontent.com/55994508/74997584-07820380-541c-11ea-9355-b1c8bad08032.png" />

# A Dating and Friendship App for Programmers

## Overview

<img width="150" src="https://user-images.githubusercontent.com/55994508/74997584-07820380-541c-11ea-9355-b1c8bad08032.png" /> is a responsive app for lonely software developers looking to connect with each other IRL. Users can create a profile for themselves and have it displayed on the home page for other users to see and match with. Users can also edit their own profiles to update their status.

[Meet your .match()!](http://consoledotlove.herokuapp.com/)


--RIXIO add application preview gif here - no header please

<img width="746" alt="" src="https://your-file-here.gif">

**Concept** Idea (_source: Here_)

--RIXIO, this app was your idea so if you want to put a few words about what inspired you feel free

## Target Audience

<img width="150" src="https://user-images.githubusercontent.com/55994508/74997584-07820380-541c-11ea-9355-b1c8bad08032.png" /> is for anyone who wants to connect with software engineers!

## Instructions
-- RIXIO/MUEZZIN please proof and see if these instructions are good enough for you

On the home page, the user may either create a profile or continue as a guest. They will then be taken to the profiles page, where they can view individual profiles! Once a profile is selected, the user can decide whether or not they want to match.  Once they click the match button, they'll find out if they were a .match(), and their match's Github link will be revealed!

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

<img width="746" alt="browser view 1" src="image-link-here">

## Browser View 2

<img width="746" alt="browser view 2" src="image-link-here">

## Mobile View 1

<img width="746" alt="mobile view 1" src="image-link-here">

## Mobile View 2

<img width="746" alt="mobile view 2" src="image-link-here">
  
## Code structure??
-- MUEZZIN
-dataflow
-algorithms

## Code Sample

--RIXIO

```javascript
console.log(console.love()).match();
```

Explanation about why we are featuring this code here. Code must be something we are proud of that served as a corder stone for the app.(_source: Person_)

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

--MUEZZIN

Functionality:
- React with React Router for navigation
- Fetch for API calls (was Axios, but we were unable to achieve full CRUD, so switched to fetch)
- Lodash for randomization

Testing:
- Enzyme
- Jest
- React Testing Library

Design:
- CSS Grid

## Contribution Guidelines

-- MUEZZIN

[Submit an issue to the front-end repo](https://github.com/muezzinsarwar/console.love-frontend/issues)
<br>
[Submit an issue to the back-end repo](https://github.com/muezzinsarwar/console.love-backend/issues)

## Challenges, Bugs and Fixes
--MUEZZIN (but all may add)

- Front-end testing with Jest and Enzyme was particularly challenging
- Couldn't get redirect to newly created profile page to work
- Match algorithm proved difficult
- Setting state guest v user

## Sources

Front-end testing:
- [Testing API Calls in React](https://medium.com/@manastunga/unit-testing-api-calls-in-react-enzyme-and-jest-133b87aaacb4) enabled us to build successful tests for our more complex components
- [React Testing Library Common Scenarios](https://rafaelquintanilha.com/react-testing-library-common-scenarios/)
- [React Testing with Jest and React-testing-library](https://www.youtube.com/watch?time_continue=773&v=3e1GHCA3GP0&feature=emb_logo)
- [Testing React Components with Jest and Enzyme](https://blog.bitsrc.io/how-to-test-react-components-with-jest-and-enzyme-in-depth-145fcd06b90)

Front-end Framework:

- [Jennifer Meade's CRUD App example](https://git.generalassemb.ly/seir-129/react-crud-classes) helped us construct our front end

## Acknowledgements

Special thanks to:
- Hou Chia for his help with Jest/Enzyme testing
- Jennifer Meade for her invaluable React Crud Classes app
