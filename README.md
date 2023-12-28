# News-App

News App is a straightforward web application designed to display news articles based on selected topics. The application offers support for two languages, Arabic and English, while also providing right-to-left (RTL) language support for an enhanced user experience. Users can easily navigate through news content in their preferred language with the convenience of RTL layout when required.

# Setup

## Application Setup

- Move to new-app Directory
- Read the Readme.md file for detailed execution and setup

# Project Structure Documentation

This document provides an overview of the structure of the `news-app` React application.

## Directory Structure

The project is organized into the following directories:

- **node_modules:** Contains project dependencies installed via npm/yarn.
- **public:** Contains the public assets and the HTML file used as the entry point for the application.
- **src:** Contains the source code of the application.

  - **Assets:** Holds static assets like images, fonts, or other resources used in the application.
  - **Components:** Contains reusable React components used throughout the application.

    - **Error:** Holds components related to error handling.
    - **NavigationBar:** Contains components related to the navigation bar.
    - **NewsCard:** Components related to displaying news cards.
    - **Thumbnail:** Components related to displaying thumbnails.

  - **Constants:** Holds constant values used across the application.
  - **Helper:** Contains utility/helper functions used throughout the application.
  - **i18n:** Contains localization/internationalization files if used.
  - **Pages:** Contains different pages/views of the application.

    - **Home:** Components and logic related to the home page.

  - **Providers:** Contains context providers if used to manage state.
  - **Services:** Holds service modules for interacting with external APIs or backend services.

## Usage and File Descriptions

### Components

- **Error:** This folder contains components responsible for error handling, such as displaying error messages or fallback UI in case of errors.
- **NavigationBar:** Houses components related to the app's navigation bar, including headers, or any navigation-related components.
- **NewsCard:** Components responsible for rendering individual news cards with relevant information.
- **Thumbnail:** Components responsible for rendering image thumbnails, if applicable.

### Pages

- **Home:** Contains components and logic specific to the home page of the application.

### Constants

- Holds constant values used across the application, such as API endpoints, configuration values, or theme settings.

### Helper

- Contains utility/helper functions used across different parts of the application.

### Services

- Holds modules responsible for interacting with external APIs or backend services. These modules abstract API calls or data fetching logic.

## Modifying the Project

When making changes or additions to the project, ensure to maintain the existing structure and naming conventions for consistency. Add new components, pages, or services in their respective directories and follow best practices for React development.

## Additional Notes

- All the development was done on on 'develop' branch, so for checking commits, go to commits section of 'develop' branch.
