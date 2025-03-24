# Movie-Application: Discover Your Next Favorite Film! 🎬

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0.12-blueviolet?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-1.4.13-orange?logo=appwrite)](https://appwrite.io/)

**Movie-Application** is a dynamic web application that allows you to explore and discover a vast collection of movies. Built with React, Vite, Tailwind CSS, and Appwrite, this project offers a seamless and visually appealing movie browsing experience.

## ✨ Features

-   **Trending Movies Carousel:**  A visually engaging carousel showcasing the top trending movies, fetched dynamically.
-   **Search Functionality:**  Easily search for movies by title with a responsive and debounced search bar.
-   **Movie Listings:** Browse a comprehensive list of movies, complete with details like title, rating, language, and release year.
-   **Dynamic Movie Cards:** Each movie is presented in an attractive card format, featuring the movie poster and key information.
-   **Responsive Design:**  Enjoy a consistent and optimized experience across various devices, from desktops to mobile phones.
-   **Appwrite Integration:** Utilizes Appwrite for backend services, including:
    -   Tracking trending movies based on search frequency.
    -   Storing and retrieving movie data.
-   **The Movie Database (TMDB) API:** Fetches movie data from the TMDB API, ensuring up-to-date and comprehensive movie information.
- **Spinner:** Loading indicator while fetching the data.
- **Error Handling:** Display error message if any error occured.

## 🛠️ Tech Stack

-   **React:**  A JavaScript library for building user interfaces.
-   **Vite:**  A fast build tool for modern web development.
-   **Tailwind CSS:**  A utility-first CSS framework for rapid UI development.
-   **Appwrite:**  An open-source backend server for web and mobile applications.
-   **TMDB API:**  The Movie Database API for fetching movie data.
-   **React-use:** For debounce functionality.

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd movie-application
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Set up environment variables:**

    -   Create a `.env.local` file in the root directory.
    -   Add the following environment variables, replacing the placeholders with your actual keys:

    ```
    VITE_TMDB_KEY=<your-tmdb-api-key>
    VITE_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
    VITE_APPWRITE_DATABASE_ID=<your-appwrite-database-id>
    VITE_APPWRITE_COLLECTION_ID=<your-appwrite-collection-id>
    ```

5.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

6.  Open your browser and visit `http://localhost:5173` (or the URL provided by Vite).

## Outcome

![image](https://github.com/user-attachments/assets/0f0e9348-aece-4f42-8a6f-8d404d58ea39)


