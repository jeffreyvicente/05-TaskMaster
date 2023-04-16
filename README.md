# TaskMaster

## Description

This is a simple calendar application that allows a user to save events for each hour of the day. <br>
The app is designed to run in a browser and features dynamically updated HTML and CSS powered by jQuery.

## Table of Contents

- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-up](#mock-up)
- [Preview](#preview)
- [Features](#features)
- [Technology Used](#technologies-used)


## Installation

1. Download the application: You can either download the application from a website or clone it from a Git repository. If you're cloning it from a Git repository, you'll need to have Git installed on your computer.
2. Extract the files: Once you have the application downloaded, extract the files from the zip folder. You can extract the files to any location on your computer.
3. Open the application: Open the folder where you extracted the files, and look for the index.html file. Double-click on it to open it in your default web browser. You should now see the application running.


## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Mock-up

![alt text](/assets/images/05-third-party-apis-homework-demo.gif)

## Preview

View live preview hosted on [GitHub Pages](https://jeffreyvicente.github.io/05-TaskMaster/)

![alt text](/assets/images/05-third-party-apis-homework-demo.gif)


## Features

Users can view the current date and time at the top of the page.
Users can add events to specific hours of the day by clicking on the corresponding time block.
Users can edit or delete existing events by clicking on the event text.
Events are saved to local storage, so they persist even if the user closes or refreshes the page.
The app includes color-coded time blocks to indicate past, present, and future events.
Technologies Used

## Technologies Used
- HTML
- CSS
- Bootstrap
- jQuery
- dayJS

