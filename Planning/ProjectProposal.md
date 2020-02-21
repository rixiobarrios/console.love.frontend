# console.love Project Proposal

## Overview

console.love is a dating app for lonely developers looking to connect with each other IRL. Users can create a profile for themselves and have it displayed on the home page for other users to see and match with. Users can also edit their own profiles to update their status.

## Wireframes

![Wireframe](https://user-images.githubusercontent.com/57021062/74549991-38db6a80-4f16-11ea-868d-fdfdbc4b282d.png)

## User Stories
- As a user, I would like to see a welcome screen and sign up as a user or continue as a guest.
- As a user, I would like to see the profiles of other people I can connect with.
- As a user, I would click on the profile button and see my own profile.
- As a user, I would like to click an edit button to edit or delete my own profile.
- As a user, I would like to click on another person's profile picture to see their entire profile.
- As a user, I would like to click the match button to match up with the people that I like.

## Planned Workflow and Responsibilities

The console.love team will use a combination of Centralized and Feature Branch Git Workflows, with an emphasis on pair programming. Responsibilities will be distributed roughly as follows:

Jaimie - Project Manager/Scrum Master - Backend + Testing - Deployment - React Router
<br>
Muezzin - Git Manager - Javascript Guru - Algorithm Wizard
<br>
Rixio - Ideas Guy - CSS Master - Comfortable in React

These responsibilities are based on team members' natural strengths. Each member will be working on both ends of the project. We plan to work on both things we are comfortable with and things that we struggle with, so that we each learn something new and improve areas that need it. All planning and task tracking will be handled through our Trello Team Board.  The team has set a rough schedule and will meet over Zoom. 

## Technologies
Front end:
- React, React Router
- Axios for API calls
- CSS Grid

Back end:
- Database
   - MongoDB
   - Mongoose
- Functionality
   - Express
   - Method-override
   - Lodash
- Connection between back and front ends
   - Cors
- Testing
  - Supertest
  - Chai
  - Mocha

## Component Hierarchy

![Component Hierarchy Diagram](https://user-images.githubusercontent.com/57021062/74549055-92db3080-4f14-11ea-813d-ec4333c03d07.png)

## Profile Data Example

![Profile Document Example](https://user-images.githubusercontent.com/57021062/74544666-214bb400-4f0d-11ea-945c-6cb27dfb399e.png)

## Dataflow Diagram

#### Preliminary Dataflow Example

![Dataflow Diagram](https://user-images.githubusercontent.com/57021062/74551538-fa937a80-4f18-11ea-9238-c7fdc5764f21.png)

## App Tiers

#### Bronze (MVP)
- App optimized for mobile from outset
- Welcome page contains blank form with option to Sign Up (create profile) or Continue as Guest (routes to Home)
- Home displays an assortment of profile pictures (from profiles in database)
- Each picture is a clickable link that takes user to a profile page
- The profile page contains: picture, age, name, location, about me, programming languages, Home button and Match button
- Match button takes you to a page that displays "It's a Match!" and a Home button
- Edit page with pre-populated form to update or delete user profile

#### Silver
- Pictures grid rotates every time site loads
- If you match, you can see their github link
- Refactor with Hooks
- Logo

#### Gold
- User authentication
- Incorporate GoogleMaps location for profiles/user
- Messaging by id (users can chat with each other)
