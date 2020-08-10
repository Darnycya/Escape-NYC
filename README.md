# Escape-NYC

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Escape From NYC** is a web application that will allow users to submit hiking trails. It shows the distane in miles from NYC to encourage New Yorkers to leave the city and get some fresh air. Users can submit multiple trails uploading a scenic view of the hike and it's difficulty rated from easy, moderate, and hard. Users can also comment on different hikes on the website._


<br>

## MVP

_The **Escape From NYC** MVP is to create a full CRUD database._

<br>

### Goals

- _A semi CRUD database for users._
- _A full CRUD database for trails._
- _Attractive CSS._
- _Searchbar for trails._


<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The framework for the app._               |
|   React Router   | _Allow transitions between screens._       |
|    Body-Parser   | _Allow user to make edits._                |
|     Rails        | _The full stack framework for the app._    |


<br>

### Client (Front End)

#### Wireframes

[Click Here](https://wireframe.cc/JSUq6z)

- Desktop Home / Index 

![Click Here](https://wireframe.cc/rf9vuH)

- Desktop Hill Page / Log In

![Click Here](https://wireframe.cc/F3j1jd)

- Desktop User Page / Create An Account

![Click Here](https://wireframe.cc/HKMvpv)

- Desktop Create A New Trail

![Click Here](https://wireframe.cc/Pey0V0)

- Mobile Home / Index

![Click Here](https://wireframe.cc/qPvs1O)

- Mobile Hill Page / Log In

![Click Here](https://wireframe.cc/JRhUCS)

- Mobile User Page / Create An Account

![Click Here](ttps://wireframe.cc/Vk7cUn)

- Mobile Create A New Trail

#### Component Tree

![Click Here](https://drive.google.com/file/d/1uV4vhjnUoIYGKOfai6Wk2EAj-yoWmrIZ/view?usp=sharing)

#### Component Hierarchy



``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Search.jsx
      |__ Main.jsx
      |__ ShowTrails.jsx
      |__ TrailDetails.jsx
      |__ Comments.jsx
      |__ UpdateTrail.jsx
      |__ Login.jsx
      |__ UserPage.jsx
      |__ Register.jsx
      |__ Header.jsx
      |__ Shared.jsx
        |__ Header.jsx
        |__ Footer.jsx
        |__ Layout.jsx
|_ screens/
      |__ Home
      |__ ListOfTrails
      |__ TrailDetails 
      |__ UpdateTrail
      |__ Login
      |__ Register
      |__ User
      |__ SearchResults        
|__ services/

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the logo and Login link/User's Picture._|
|    Search    |   class    |   y   |   n   | _The search bar will render searched trails on a new page._      |
|  Show Trails |   class    |   y   |   y   | _Show Trails will display a list of all of the trails._          |
| Trail Details|   class    |   y   |   y   | _Trail Details will render all of the trail's properties._       |
|   Comments   | functional |   y   |   y   | _The Comments will show the comments._                           |
| Update Trail |   class    |   y   |   y   | _Update Trail will allow props to be passed to Show Trails and Trail Details._ |
|    Login     | functional |   n   |   n   | _Login will take in the user's information._       |
|   User Page  | functional |   n   |   y   | _The User Page will render the Login Information._      |
|   Register   | functional |   n   |   n   | _Register will take in user's information._                 |


#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create models and tables |    H  |     3 hrs      |     3.5 hrs     |    TBD    |
| Create CRUD Actions |    H     |     8 hrs      |     9 hrs     |     TBD     |
| Create Screens    |    H     |     24 hrs      |     24 hrs     |    TBD    |
| Routing between pages |    L     |     2 hrs      |     3 hrs     |     TBD     |
| Search Bar    |    L     |     2 hrs      |     2 hrs     |    TBD    |
| Comments |    L     |     2 hrs      |     3 hrs     |     TBD     |
| TOTAL               |          |     41 hrs      |     44.5 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Click Here](https://drive.google.com/file/d/1aMZXlD2ze2R-obvpDMFava6SvLVG0Ktb/view?usp=sharing)


<br>

***

## Post-MVP


- _A Full CRUD database for users._
- _A full CRUD database for comments._
- _A live search bar._
- _Allow users to find users._
- _Display trails users created in their user profile._

<br>

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.