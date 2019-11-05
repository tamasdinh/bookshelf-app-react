# BookShelf App

## Table of Contents

* [Project Goals](#Project-goals)
* [Getting Started](#Getting-started)
* [Built with](#Built-with)
* [Authors](#Authors)
* [Acknowledgments](#Acknowledgments)

## Project goals

The goal of the project was to build and interactive bookshelf app with which users categorize books that are of interest to them.

The key functionalities are:
* Bookshelf
  - dynamically generated bookshelf home page (w/ currently reading, must read and already read shelves)
  - books can be moved between shelves via a button attached to each book
  - state of books in terms of category (shelf membership) is persisted between page loads via updating the status of the book on the provided API and in the app's state component
* Search page
  - a search page has also been added where users can search for books based on title and/or authors
  - the search page dynamically refreshes search results and users can also search for multiple words at the same time
  - the category of a book can also be changed on the search page if the book is listed among search results

## Getting Started

Given that the project was bootstrapped with ```create-react-app```, it can be easily set up on your local machine. You can easily clone the contents of the repo by running

```git clone https://github.com/tamasdinh/bookshelf-app-react.git```

in your command line. This will download the entire repository to your computer, into a subfolder named ```bookshelf-app-react``` in the folder from which you initiated cloning. Alternatively, you can download the repo as a ```zip``` file from the repo page.

Once you have the repo, you can just run ```npm install``` and subsequently, ```npm start``` and the app will automatically open up the local server output in your browser. From there you can check out functionality both on the bookshelf page and the search page.

## Built With

* ```Javascript``` - Starting to grow on me :)
* [React](https://reactjs.org) - An excellent, state-based UI framework for Javascript, developed and open-sourced by the Facebook UI Team
* [Google Chrome](https://www.google.com/chrome) - Probably you already heard of it... Has incredibly useful developer tools built-in.

## Authors

* **Tamas Dinh** - [LinkedIn profile](https://www.linkedin.com/in/tamasdinh/)


## Acknowledgments

* Udacity for putting together this excellent course on front-end development and providing excellent instruction and starter html and style code so that we don't have to worry about design.

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
