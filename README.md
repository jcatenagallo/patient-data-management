# Patient Data Management Application

Welcome to the Patient Data Management application repository. This project is a Next.js application that uses Axios for HTTP requests, React Query for data management, Tailwind CSS with Twin Macro for styling, and Framer Motion for animations. It is deployed on Vercel and here is the domain: https://patient-data-management-six.vercel.app/ 

## Table of Contents

1. [About the Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
5. [Possible Improvements](#possible-improvements)

## About the Project

This project is a simple, user-friendly patient data management system, designed to streamline the process of managing patient data. It is built using modern development tools and libraries, ensuring an efficient, responsive, and smooth user experience. 

## Built With

This project is built with a number of leading-edge technologies:

## Built With

This project is built with a number of leading-edge technologies:

- [Next.js](https://nextjs.org/): A React framework that enables features like server-side rendering and generating static websites for React-based web applications.
- [TypeScript](https://www.typescriptlang.org/): An open-source language that builds on JavaScript by adding static type definitions. Types provide a way to describe the shape of an object, providing better documentation, and allowing TypeScript to validate that your code is working correctly.
- [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
- [React Query](https://react-query.tanstack.com/): A data synchronization library for React that makes fetching, caching, synchronizing, and updating server state in React applications a breeze.
- [React Hook Form](https://react-hook-form.com/): A performant, flexible, and extensible form library for React that leverages the power of hooks to simplify form validation.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup.
- [Twin Macro](https://github.com/ben-rogerson/twin.macro): A developer tool for using Tailwind CSS syntax with Styled Components or Emotion in your React project.
- [Framer Motion](https://www.framer.com/api/motion/): A production-ready motion library for React that aims to provide a simple and powerful API for creating UI animations and transitions.
- [ESLint](https://eslint.org/): A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Helps to maintain a consistent code style.
- [Prettier](https://prettier.io/): An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.
- [Husky](https://typicode.github.io/husky/): Modern native Git hooks made easy. Used to enforce the project's coding standards before committing or pushing code.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Make sure you have Node.js installed on your machine. If not, you can download it from [here](https://nodejs.org/en/download/).
- This project uses Yarn for package management. You can download it from [here](https://yarnpkg.com/getting-started/install).

### Installation

```sh
# 1. Clone the repository
git clone https://github.com/<your_username>/patient-data-management.git

# 2. Navigate into the cloned repository
cd patient-data-management

# 3. Install the dependencies
yarn install

# 4. Start the development server
yarn dev
```

Now, the application should be running on [localhost:3000](http://localhost:3000).

## Usage

Once the application is running locally, you can use it to manage patient data. You would see an edit button in each card to edit patient data and a create new patient button in the bottom right of the application to create a new one.

## Possible Improvements

- Pagination: I would like to add pagination to avoid fetching hundreds of patient data at once. Instead, more data should be loaded when the user scrolls.
- Filters: Implementing a filter system would be straightforward with this TypeScript structure, and it would be useful for searching through patient data.
- Masonry: I believe a masonry layout could enhance the user interface by eliminating blank spaces when a user opens a description.
- More animations: I would like to incorporate more animations into this application.
