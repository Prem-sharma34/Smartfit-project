# Smartfit-project

# Exercise Details Web Application

## Overview

This web application allows users to view detailed information about various exercises. It uses a card-based layout to display each exercise, and when a card is clicked, it expands to show more detailed information, such as descriptions, steps to perform, targeted muscles, and benefits.

The application is built with Flask (Python) for the backend and uses HTML, CSS, and JavaScript for the frontend.

## Features

- **Exercise Cards**: Display basic information about an exercise, including the name and an image.
- **Expand on Click**: When a user clicks on a card, it expands to show more detailed information, such as:
  - Description of the exercise
  - Steps to perform the exercise
  - Targeted muscles
  - Benefits of the exercise
- **Responsive Design**: The layout is responsive and adjusts based on the screen size. On smaller screens, the cards stack vertically.

## Folder Structure
```bash
├── README.md
├── app.py
├── backend.js
├── chatbot
│   ├── node_modules
│   └── package.json
├── data.py
├── database.db
├── static
│   ├── css
│   │   ├── exercise.css
│   │   ├── home.css
│   │   ├── sign.css
│   │   └── styles.css
│   ├── js
│   │   ├── app.js
│   │   └── sign.js
├── templates
│   ├── chatbot.html
│   ├── exercise.html
│   ├── home.html
│   ├── login.html
│   ├── main.html
│   └── signup.html
└── venv

```



##Dependencies

Firstly go to the main folder where all the main files (like )

For macos
```bash
sudo npm install express body-parser cors @google/generative-ai dotenv
```

For windows 
```bash
npm install express body-parser cors @google/generative-ai dotenv
```
