# Patient Data Management Application

Welcome to the Patient Data Management application repository. This project is a Next.js application that uses Axios for HTTP requests, React Query for data management, Tailwind CSS with Twin Macro for styling, and Framer Motion for animations. It is deployed on Vercel and here is the domain: https://patient-data-management-six.vercel.app/ 

## Table of Contents

1. [About the Project](#about-the-project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)

## About the Project

This project is a simple, user-friendly patient data management system, designed to streamline the process of managing patient data. It is built using modern development tools and libraries, ensuring an efficient, responsive, and smooth user experience. 

## Built With

This project is built with a number of leading-edge technologies:

- [Next.js](https://nextjs.org/): A React framework that enables features like server-side rendering and generating static websites for React-based web applications.
- [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
- [React Query](https://react-query.tanstack.com/): A data synchronization library for React that makes fetching, caching, synchronizing, and updating server state in React applications a breeze.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup.
- [Twin Macro](https://github.com/ben-rogerson/twin.macro): A developer tool for using Tailwind CSS syntax with Styled Components or Emotion in your React project.
- [Framer Motion](https://www.framer.com/api/motion/): A production-ready motion library for React that aims to provide a simple and powerful API for creating UI animations and transitions.

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

## Posible improvements

- Pagination: I Would like to add pagination to not ask for a hundred of patients data at one, and instead add more when the user scroll.
- Filters: A system of filters will be easy to implement with this typescript structure and it will be usefull to search for patients.
- Masonry: I thinkg a masonry layout could improve the UI, to not generate those blank spaces when a user open a description.
- More animations: I would like to add more animation to this app.
