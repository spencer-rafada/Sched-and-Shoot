# Overview

As a Software Engineer, I try to be updated with the trending technology stacks commonly used in the industry by learning, watching videos, and reading documentations about these technologies. After learning these technologies, I try to apply my knowledge by creating passion projects on the side to maintain a habit of learning even outside the classroom environment.

Book your photographer on your next photoshoot! Sched and Shoot Web App makes use of ReactJS web framework for its front end development. 

After cloning the repository, go to the client directory using **cd client** from the root directory and run **npm start** to load all the packages. The command should load up the first page of the app on http://localhost:3000/. To start up the backend server, go to the server directory using **cd server** from the root directory and run the command **npm run dev**. This will use nodemon to start the server so that it will reset the server every time changes are made to the backend server.

The purpose of writing this software is to further my knowledge with Full Stack Web Development. 

[Deployment Product](https://snapandshoot.herokuapp.com/)

[Development Log #1](https://youtu.be/zZfzqhGGnAE)

[Development Log #2](https://www.youtube.com/watch?v=e4Sy_KQM7KE)

# Web Pages

As of October 1, there are three pages for this web app. These are:

- Home Page
    - As of now, there are no components on the home page besides the Navigation Bar. The Home page is one of the features that I have not committed on doing yet for this sprint. However, the home page will contain a main section that contains different sections about the app.
- Search / List Page
    - The Search / List page will display all of the photographers currently in the area. Initially, I was planning to connect this app to a cloud database and be able to display it after sending a GET request to the back end, but that will be implemented for the next spring wherein I work to learn about Cloud Databases. Also, the Search functionality has not yet been implemented, but I will add a Search Bar component on this page.
- Add Page
    - The Add page adds Photographer information into a list. Initially, the plan was to send a POST request to the back end, but it will also be implemented on the next sprint. After submitting the information, it will send an alert about the information of the photographer.

# Cloud Database

I used MongoDB for the Cloud Database that my backend server is connected to. MongoDB is a non-SQL database which made it easier for me to create and implement the structure of the data for Photographers and Users for the Web app. 

# Development Environment

- MongoDB
- Express
- NodeJS
- ReactJS
- CORS
- JavaScript
- Visual Studio Code

I used ReactJS and JavaScript mostly to develop the components that will be loaded into the front end of this application. I implemented the components in a way wherein the states that are used across different components will be initialized in the closest parent component. Also, I learned how to use the props component of each component to be able to communicate data within each component.

I used NodeJS and Express for configuring the Backend server. I also used MongoDB atlas for the Cloud Database and connected it using the MongoDB URI and MongoClient package. I also used the package cors to allow Cross Origin Resource Sharing between the front end and the back end.

# Useful Websites

* [ReactJS Documentation](https://reactjs.org/)
* [Communication Between React Components](https://stackoverflow.com/questions/29100774/reactjs-setstate-on-parent-inside-child-component)
* [How to add items in React](https://www.robinwieruch.de/react-add-item-to-list/)
* [MongoDB Documentation](https://www.mongodb.com/docs/)
* [MongoClient Documentation](https://mongodb.github.io/node-mongodb-native/api-generated/mongoclient.html)
* [Returning Values from Async/Await Functions](https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function)
* [Fetching Data in React](https://www.freecodecamp.org/news/fetch-data-react/)
* [How to Call API using UseEffect](https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react)
* [Query Multiple AND and OR](https://stackoverflow.com/questions/40388657/query-mongodb-with-and-and-multiple-or)
* [Axios POST JSON](https://masteringjs.io/tutorials/axios/post-json)
* [React - Show Different Components on Click](https://flaviocopes.com/react-show-different-component-on-click/)

# Future Work

* Implement a Back-End
* Improve UI/UX
    * Implement better CSS structure
* Search Functionality
* About Us page
* Posting Photographer Gigs as a Photographer
* Implementing Reviews and Ratings