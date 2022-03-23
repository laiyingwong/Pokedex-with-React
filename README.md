# Pokedex with React

Pokedex is a game that randomly assigns 8 pokemon cards into two hands of 4 cards each. It calculates the total experience of each hand of pokemon and determines the "winner", where the winning hand is the one with the higher total experience. Winner changes every time the page is refreshed.

## 🎉 Demo 

![app demo](Assets/Pokedex.gif)


## ✨ What I Have Learned

**Components** are building blocks of **React** that separate the concerns and split features into different modules. They are reusable and are rendered with **JSX** (HTML-looking code). Components are built upon each other and the data is passed from one component to the other through `props` (the object that holds the value of data passed into React component via JSX attributes). It's challenging to modify the component hierarchy.

Each component goes in separate file, and it's conventional to name the file with the component name (words should be capitalized). For example, for the component `Button`, the filename should be `Button.js`. When making CSS file for a particular React component, correspond it with the same filename (e.g. `Button.css`).

This project uses **Create-React-App** which is a ultility script that creates a skeleton React project. We need to keep the top-level component `App` because Create-React-App skeleton assumes the top object is `App` in `App.js`.



## 💻 Setup

1️⃣ Run the command below to install packages used in the project:
```sh

$ npm install

```
2️⃣ Move into the React project:
```sh

$ cd pokedex-with-react

```

3️⃣ Run `npm start` in the terminal to start the server, and the application will automatically open up on `http//localhost:3000` in the web browser.


## 👏 Credits

This project is based on the React component and props tutorials of <a href="https://www.udemy.com/course/modern-react-bootcamp/">Modern React Bootcamp</a> by Colt Steele.
