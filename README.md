# Train Qualitier Frontend
The Train Qualitier application delivers a user-friendly interface for monitoring and reporting on the quality of train travel experiences, leveraging real-time data collected from various sensors.

## Frontend Overview
The frontend is developed using React, creating a dynamic and responsive user interface that adjusts smoothly to different devices and screen sizes. It interacts with the backend for data exchange and operations, presenting users with an intuitive platform for viewing and analyzing travel conditions.

### Getting Started
Follow these instructions to set up the frontend environment on your local machine.

### Prerequisites
- Node.js and npm (Node Package Manager)

### Installation
1. Clone the project repository:

`git clone https://your-repository-url.git`

2. Change to the frontend directory:

`cd train-qualitier-frontend/`

3. Install the required npm packages:

`npm install`

### Running the Application
- Start the React application:

`npm start`

This command runs the app in the development mode. Open `http://localhost:3000` to view it in the browser. The page will reload if you make edits, and any lint errors will be shown in the console.

### Building for Production
To prepare the application for deployment:

`npm run build`

This builds the app for production to the build folder, efficiently bundling React in production mode and optimizing the build for the best performance.

## Deployment
For deploying the frontend:

The built application can be served by a web server such as Nginx. Configure Nginx to serve the static files from the build directory and to handle requests to the backend appropriately.
Ensure the backend and frontend are properly configured to communicate with each other, typically by setting up Nginx as a reverse proxy to forward API requests to the backend service.


## Technology Stack
- React: Facilitates the development of a dynamic and interactive user interface, enhancing the user experience with reusable components.
- HTML, CSS, JS: Standard web technologies used alongside React to create a seamless and visually appealing application design.
- Node.js: Provides the runtime environment to run JavaScript code outside of a browser, necessary for React development and building the project.

## Features
- Real-time data visualization
- Interactive UI for monitoring train ride conditions
- Responsive design for a wide range of devices

This frontend part of the Train Qualitier application is designed to make the process of tracking and analyzing train travel quality straightforward and efficient. We welcome your contributions to make our application more user-friendly and feature-rich.