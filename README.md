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


MOST IMPORTANT (WITHOUT IT THE APP WON'T RUN)

Creating a virtual Enviornmnet

Installing the Virtual enviornment
```bash
python -m venv venv
```

#FormacoS (entering into enviornment)
```bash
source venv/bin/activate
```

#forwindows (make sure you are in cmd)
```bash
venv\Scripts\activate
```



DEBUGGER//

ERROR
```bash
[0] Traceback (most recent call last):
[0]   File "/Users/suryanshkapoor/Developer/december/smartfit/Smartfit-project/app.py", line 1, in <module>
[0]     from flask import Flask, render_template, request, url_for,flash,redirect,flash , session
[0] ModuleNotFoundError: No module named 'flask'
[0] python3 app.py exited with code 1
```

SOLUTION
```bash
python3 -m pip install Flask
```
