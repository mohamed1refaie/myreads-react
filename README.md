# MyReads Project

This is MyReads Project where i used React to build the user interface and to update the pages , react-router is used too for routing.
After you run the projects you have 3 shelves (currently reading , want to read , read) you can choose any book and remove it to another shelf or remove it completly from your collection.
There is a search page which updates dynamically when the query of the search changes , you can choose a book from the search page to add it to your collection.

## Instructions

To Run the Project:
* clone the repo or download it
* cd into the directory of the project from the terminal
* install all project dependencies with `npm install`
* start the development server with `npm start`

## ScreenShots

![Main Page](http://oi66.tinypic.com/27ymico.jpg)
![Search Page](http://oi67.tinypic.com/300d4rn.jpg)

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── package-lock.json
├── .eslintrc
├── .gitattributes
├── .gitignore
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # the component for the book
    ├── BookShelf.js # the component for the bookShelf
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── MyReads.js # the component that hold the search and the 3 books shelves
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
