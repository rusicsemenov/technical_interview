# Task for test

## HTML

- make header (simple component)
- make footer (inside App.js) should be on the bottom, **but not fixed and absolute**
- style for these components:
    - color: white
    - background: blue
    - height: 50px (can grow)
    - text should be in the center (horizontal and vertical)

## Clock

- add a simple clock inside your footer, show HH:MM:SS
- clock position should be right-bottom
- clock should be active (change time every second)

## Counter

- make the simple counter, it should increment and decrement the value
- use local state or context as you want
- buttons should be inside the main content, and the counter result should be visible inside the header

## Store (Redux)

- print `headerText` in the header and `footerHtml` in the footer
- use the store to save counter state (transfer counter state from component to the store), counter can't be lower than 0
- make action to change the value
- get user information and print the user list (print name and username)

## API

- get information from some placeholder, for example: `https://jsonplaceholder.typicode.com/users` to get more information: [jsonplaceholder](https://jsonplaceholder.typicode.com/)
- store update should be made after click on any button
- change users state to received information

## Selectors

- add a simple filter for users by user name, you can use local state or redux to make filter

## JS

- try to flat array from the store: `arrayToFlat` make a simple array and print it
