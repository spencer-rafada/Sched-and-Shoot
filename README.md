# Overview

As a Software Engineer, I try to be updated with the trending technology stacks commonly used in the industry by learning, watching videos, and reading documentations about these technologies. After learning these technologies, I try to apply my knowledge by creating passion projects on the side to maintain a habit of learning even outside the classroom environment.

Book your photographer on your next photoshoot! Sched and Shoot Web App makes use of ReactJS web framework for its front end development. After cloning the repository, go to the client directory and run **npm start** to load all the packages. The command should load up the first page of the app on http://localhost:3000/


The purpose of writing this software is to further my knowledge of Web Development by learning a new web framework. In this case, I decided to learn ReactJS.

[Deployment Product](https://schedandshoot.herokuapp.com/)

[Development Log #1](https://youtu.be/zZfzqhGGnAE)

# Web Pages

As of October 1, there are three pages for this web app. These are:

- Home Page
    - As of now, there are no components on the home page besides the Navigation Bar. The Home page is one of the features that I have not committed on doing yet for this sprint. However, the home page will contain a main section that contains different sections about the app.
- Search / List Page
    - The Search / List page will display all of the photographers currently in the area. Initially, I was planning to connect this app to a cloud database and be able to display it after sending a GET request to the back end, but that will be implemented for the next spring wherein I work to learn about Cloud Databases. Also, the Search functionality has not yet been implemented, but I will add a Search Bar component on this page.
- Add Page
    - The Add page adds Photographer information into a list. Initially, the plan was to send a POST request to the back end, but it will also be implemented on the next sprint. After submitting the information, it will send an alert about the information of the photographer.

# Development Environment

- ReactJS
- JavaScript
- Visual Studio Code

I used ReactJS and JavaScript mostly to develop the components that will be loaded into the front end of this application. I implemented the components in a way wherein the states that are used across different components will be initialized in the closest parent component. Also, I learned how to use the props component of each component to be able to communicate data within each component.

# Useful Websites

* [ReactJS Documentation](https://reactjs.org/)
* [Communication Between React Components](https://stackoverflow.com/questions/29100774/reactjs-setstate-on-parent-inside-child-component)
* [How to add items in React](https://www.robinwieruch.de/react-add-item-to-list/)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}
* Implement a Back-End
    * Handle REST API requests from Front End
    * Connect the end points from both front end and back end
* Improve UI/UX
    * Implement better CSS structure
* Log In page
* Search Functionality
* About Us page
* Posting Photographer Gigs as a Photographer
* Implementing Reviews and Ratings