# 🎉 2020 Reimagined - A Fullstack MERN App

A group project for General Assembly’s Software Engineering Immersive course, built using React, Express, Mongo, and Node.

### Developed by:
* Aislin Bamber - https://github.com/aislinb

* Hugo Kinahan -  https://github.com/hugokinahan

* Penny Jungreis - https://github.com/penelopecj

![homepage](./client/src/images/homepage.gif)

## Deployment
This website has been deployed on Heroku and is available _here._ Please feel free to register your own account, or you can use mine `penny@email` and password `pass`.

## Concept
2020 Reimagined is a place where users can browse the awesome events that happened in 2020 in an imaginary world where there was never a pandemic.

In an alternate reality, thousands of people attended events across the world in 2020 living their best lives. Users can let us know what their 2020 selves thought as they partied, celebrated, and travelled to these incredible events.

## Project Brief
* Build our most advanced project to date with achievable scope and a focus on creating a professional finished product.
* Make it a full-stack application by making our own backend and frontend.
* Use an Express API to serve our data from a Mongo database.
* Consume our API with a separate frontend built with React.
* Be a complete product with multiple relationships and CRUD functionality for multiple models.
* Implement thoughtful user stories/wireframes for MVP and additional features.
* Have a visually impressive design.

## Technologies Used
* React.js
* Express
* Mongo
* Node.js
* JavaScript (ES6)
* HTML5
* CSS3 + SASS
* VS Code
* Git + GitHub
* Axios
* react-router-dom
* react-select
* react-hero-carousel
* react-spinners
* JSONWebToken
* bcrypt
* mongoose-unique-validator
* Mapbox
* Cloudinary
* Insomnia

## Installation Instructions
1. Clone repo code from GitHub onto your machine.
2. Use `yarn` to install all dependencies from the `package.json` file.

## User Stories & Wireframes
**Backend Wireframe**
![backend wireframe](./client/src/images/backend-wireframe.png)

**Frontend Wireframe**
![frontend wireframe](./client/src/images/frontend-wireframe.png)

## General Approach & Planning

![trello board](./client/src/images/trello.png)

### Group Work
* The three of us worked together as a group to plan out our Minimum Viable Poduct using Trello.
* We divided up the tasks needed to set up the backend and took turns writing seed data to populate the site.
* We used Trello, Slack, Zoom, and GitHub to communicate who was responsible for what and when things had been completed. Good communication was essential for this project so we would not overwrite any changes from another group member and could handle git branch conflicts easily when they arose.
* We finished our backend in the first two days of the project and then moved on to assigning React components for each of us to do.
* We helped each other to resolve any errors or bugs at the start of each day after our daily standup on Zoom.
* We made all major decisions about site styling, colours, and Google Fonts together.

### My Work
* I focussed on the Index pages, including the location filter selector and responsive design.
* I worked on the Show pages, including the display of events at each venue.
* I handled the JavaScript date manipulation on all events and review.
* The reviews and average rating frontend, complete with date stamp and profile photo.
* The nav bar, with responsive-sizing, re-load on login and logout, subtle hovers, and logo.
* Event, venue, and review 'delete' features.
* Edit form on venues and events.
* The static footer.
* Chose brand colour.

### My Teammate's Work
* The map view page, which shows the exact latitude and longitude of each event using Mapbox.
* Popups on each venue on the map displaying the events at that venue.
* The Profile page and edit form.
* The profile photo upload feature.
* The login and registration forms.
* The awesome photo slider and text animations on the homepage.
* The highest rated events (frontend).
* The average rating calculator (backend).
## Wins
* The stylish star-rating bar on the review forms.
* Cohesive and professional styling across the whole site.
* Gorgeous homepage.
* Learning to use *react-select* to filter by continent, country, and city.
* When the user adds a new venue and event at that venue, it will display on the map view as well.
* Collaboration - this was the dream team and we got so much more done together than I could have done by myself.

## Challenges
* Learning to use group Git for the first time and handling merge conflicts.
* Handling user authentication to ensure that only the creator of an event or review would be allowed to edit or delete it.

## Unsolved Problems