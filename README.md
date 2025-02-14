
# Tree Selling App

This repository contains the code for the **Tree Selling App**, a web application designed for buying and selling trees online. It utilizes Docker for containerization and is integrated into a CI/CD pipeline for automatic build, test, and deployment.

## Features

- **Web-based Interface**: Allows users to browse and purchase trees.
- **Dockerized Application**: The entire application is containerized using Docker for easy deployment and scalability.
- **CI/CD Pipeline**: The app is integrated with GitHub Actions for automated build, test, and deployment processes.
- **Responsive Design**: Ensures smooth usage on both desktop and mobile devices.

## Tech Stack

- **Frontend**: (Your frontend tech stack here, e.g., HTML, CSS, JavaScript, React, etc.)
- **Backend**: (Your backend tech stack here, e.g., Node.js, Flask, etc.)
- **Docker**: Containerization for consistent deployment across environments.
- **CI/CD**: GitHub Actions for continuous integration and deployment to Docker Hub.
- **Testing**: Automated accessibility tests using curl.

## How to Build and Run the App

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [GitHub Account](https://github.com/)
- Docker Hub credentials

### Running Locally

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/tree-selling-app.git
    cd tree-selling-app
    ```

2. Build the Docker image:

    ```bash
    docker build -t tree-selling-app .
    ```

3. Run the Docker container:

    ```bash
    docker run -d -p 8080:80 --name tree-selling-app tree-selling-app
    ```

4. Visit [http://localhost:8080](http://localhost:8080) to access the app.




