# Charity Finder Web Application

Charity Finder is a web application that allows users to search for charities, view detailed information about each charity, and save their favorite charities. This application is built with React, Typescript, and Tailwind CSS, and it utilizes the Every.org API for data fetching.

![Charity Finder Screenshot](https://github.com/angel-wan/charity-finder-application/assets/49020215/e3a0c760-226e-4ca4-9bba-b2c92ac8151f)

## Site
https://angel-wan-charity-finder.netlify.app/

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Home Page**: The home page provides a search component at the top and displays search results or default charities.
- **Search Result Page**: Search results are displayed with charity details.
- **Charity Detail Page**: Detailed information about a selected charity is shown on this page.
- **Favorites Page**: Users can view their favorite charities.

## Tech Stack

- React
- Typescript (.tsx/.ts)
- Tailwind CSS
- Every.org API

## Installation

1. Clone this repository to your local machine:

   ````bash
   git clone https://github.com/angel-wan/charity-finder-application.git
   ```

   ````

2. Change your working directory to the project folder:

   ```bash
   cd charity-finder
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Create a .env file in the project root and add your Every.org API key:

```env
REACT_APP_API_KEY=your-api-key
```

2. Start the development server:

```bash
npm start
```

3. Open your web browser and access the application at http://localhost:5173.

## Project Structure

The project is organized into different components and pages. Here's an overview:

src/components: Contains individual UI components like Search, CharityList, CharityDetail, and FavoriteCharities.
src/pages: Includes the main application pages like Home, SearchResult, CharityDetail, Favorites.
src/api: Manages API endpoints for fetching charity data.
src/redux: Contains Redux store configuration and slices for managing app state.
src/utils: Provides utility functions and constants.
src/assets: Stores assets like causes.
