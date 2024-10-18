# Triumph Tech Assignment

This is a take-home assignment project for a Web Developer position. It uses **Vite** for project setup and **Bootstrap** for styling, as specified in the assignment requirements.

## Table of Contents

- [Triumph Tech Assignment](#triumph-tech-assignment)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Development Choices](#development-choices)
  - [Deployment](#deployment)
  - [Additional Information](#additional-information)
    - [Repository Structure:](#repository-structure)

## Project Overview

The project demonstrates a responsive website based on a given design template. The main sections include:
- Hero Banner with Call-to-Action
- About Us Section
- Company Certifications
- Other relevant content

The project has been deployed to GitHub Pages, and you can access it [here](https://nathanrydel.github.io/triumph-tech-assignment/).

## Setup Instructions

To run the project locally, follow these steps:

### Prerequisites

Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nathanrydel/triumph-tech-assignment.git
   cd triumph-tech-assignment
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   This will start a local development server. You can view the project in your browser at `http://localhost:8080/triumph-tech-assignment/`.
4. **Build the project for production:**
   ```bash
   npm run build
   ```

## Development Choices

1. **Bootstrap Integration:**
   - The project primarily uses default Bootstrap components with slight modifications to fit the design guidelines.

2. **Custom Styles:**
   - **Bootstrap Customization:** Overrode some Bootstrap variables to fit specific design needs, including background colors, button padding, and font families.
   - **Responsive Utilities:** Custom helper classes were created for enhanced control over word wrapping, letter spacing, and element sizing across different screen sizes.
   - **Custom Media Queries:** Adjusted elements like hero images and containers for better responsiveness across various breakpoints.

3. **Vite as a Build Tool:**
   - [Vite](https://vite.dev/) was chosen for its fast setup, hot-reload feature, and optimized production build capabilities. It allowed for seamless development and efficient compilation of assets.

## Deployment

The project is deployed on GitHub Pages. To deploy changes:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Github Pages:**
   ```bash
   npm run deploy
   ```

The [`gh-pages`](https://www.npmjs.com/package/gh-pages) package is used to handle deployment, pushing the contents of the `dist` folder to the `gh-pages` branch of the repository.

## Additional Information
### Repository Structure:

- `src/`: Contains the main source files, including HTML, JS, and SCSS.
- `dist/`: The production build output.
- `styles.scss`: Main styles file where custom Bootstrap setups and additional styles are defined.

**Fonts Used:**

- [Titillium Web](https://fonts.google.com/specimen/Titillium+Web)
- [Roboto](https://fonts.google.com/specimen/Titillium+Web)

Feel free to reach out for any further questions or assistance regarding the project.