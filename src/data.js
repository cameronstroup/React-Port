import space from "./components/intro/img/voyager space.JPG";
import budget from "./components/intro/img/170349367-874aa25d-e0a4-4fdb-8f6b-f2de6dffe32f.png";
import database from "./components/intro/img/175085526-e26d0221-43e5-43a7-947f-dcb1d06c0ddd.png";
import quiz from "./components/intro/img/156971519-6c3ed119-5403-4d71-9c9d-48c5b3b3da87.jpg";
import weather from "./components/intro/img/weatherApp.png";
import fish from "./components/intro/img/babelFish.JPG";

export const projects = [
  {
    id: 1,
    img: space,
    link: "https://travisswift.github.io/Project-1-Team-Voyager/",
    github: "https://github.com/TravisSwift/Project-1-Team-Voyager",
    descripiton:
      "Team Voyager wanted to make a website where a user can come and find the latest in any astro news. In the homepage of the website the user will be able to view an APOD (astro picture of the day). This portion will display an image for the user and the user will also be able to interact with by choosing any date from present to past. Also within the homepage of this website there will be a navigation for the user to be able to choose what information they would like to view.",
    title: "Voyager Space App",
  },
  {
    id: 2,
    img: budget,
    link: "https://agile-headland-32063.herokuapp.com/",
    github: "https://github.com/cameronstroup/LIfe-and-a-budget",
    descripiton:
      "A simple budgeting website that allows the user to manually input the name, the budget, and actual amount of their income, expenses, and savings. The homepage allows the user to login or go to the main budgeting page if they are already logged in. Built with JavaScript MySQL,Node.js,Express.js,Dotenv,Sequelize,Handlebars,Chart.js,CSSBootstrap",
    title: "Life & A Budget",
  },
  {
    id: 3,
    img: database,
    link: "https://drive.google.com/file/d/1esuNdnyecAtBuQzK4-lV5_IqN_UCqAEX/view",
    github: "https://github.com/cameronstroup/social-media-with-mongoose",
    descripiton: `This application was made using MongoDB (a NoSQL database), Mongoose, and Express.js. It is a database for a social media platform  The user can use the database to add new users with a valid email and username, join other users as friends, and post"thoughts" and "reactions" (similar to comments and replies you see in social media). Users can also update and delete thoughts and reactions as well as remove friends. Try it out by creating your own username and start interacting with friends!`,

    title: "Social Media Database",
  },
  {
    id: 4,
    img: quiz,
    link: "https://cameronstroup.github.io/coding-quiz/",
    github: "https://github.com/cameronstroup/coding-quiz",
    descripiton:
      "You start with 60 seconds and will have a chance to answer four questions. It is best to move to the next question if you do not know the answer because you will be deducted points for missed answers. A quiz about Javascript built with Javascipt ",
    title: "JavaScript Quiz",
  },
  {
    id: 5,
    img: weather,
    link: "https://cameronstroup.github.io/weather-tracker/",
    github: "https://github.com/cameronstroup/weather-tracker",
    descripiton:
      "This is a web based app that I built to show the user the weather of his/her desired city.Enter in your city of choice and select search to view the current weather, temperature, humidity, wind speed, and UV Index for that city at the current time. Upon the search, the dashobard will also display the weather, temperature and hummidity forecast for the next five(5) days.The uv index will be either green, yellow, or red depending of the intensitiy of the current index. Previous searches are saved in localStorage",
    title: "Weather Dashboard",
  },
  {
    id: 6,
    img: fish,
    link: "https://babelfishapp.herokuapp.com",
    github: "https://github.com/jrj-sys/BabelFish",
    descripiton:
      "BabelFish is an interactive multi-person chat app with built in live translation  It is created using the MERN stack (MongoDB, Express.js, React, and Node.js). It also includes user authentication and authorization with JWT (JSON Web Tokens), socket.io for websockets, and utilizes Apollo Client for GraphQL.",
    title: "Babel Fish",
  },
];
