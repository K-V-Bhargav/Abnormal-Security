# README

## Project Overview

This project is a full-stack web application designed to facilitate user registration, login, and OTP-based authentication. The back-end is powered by **Node.js** using **Express** and **MongoDB**, providing a robust API for handling user data and managing files. The front-end has been implemented using **React** to ensure a smooth, responsive user experience. The application supports various user operations, including registration, login, profile updates, file management, and OTP validation. 
It is designed to be secure, scalable, and user-friendly.

## Technologies Used

- **Backend:**
  - **Node.js** and **Express** for creating the RESTful API.
  - **MongoDB** for storing user data, including credentials and file-related information.
  - **Nodemailer** for handling OTP email dispatch.
  - **Crypto** for generating secure OTPs.

- **Frontend:**
  - **React** for building a dynamic and responsive user interface.
  - **CSS** for styling the components and ensuring a responsive layout.

- **Others:**
  - **CORS** middleware for enabling cross-origin requests.

## Features

### User Registration
The application allows users to register by providing their **username**, **password**, and **phone number**. Upon successful registration, a user can proceed to log in with their credentials.

### User Login
Registered users can log in by entering their **username** and **password**. The application checks the credentials against the database and returns a success message on successful login or an error message for invalid credentials.

### OTP Generation and Validation
A user can request an OTP by providing their registered **username** (email). The OTP is generated and sent via email using **Nodemailer**. Users can then validate the OTP within a specified time frame (5 minutes). If the OTP is valid, the user is allowed to proceed with the next steps.

### User Profile Management
After logging in, users can update their profile, including their **username**, **password**, and **phone number**. Additionally, they can manage files associated with their account by adding, updating, or deleting files. Each user can maintain a list of files that can be updated with new data or removed.

### User Deletion
The system allows users to delete their profiles along with their associated files. This action permanently removes the user’s data from the system.

### Secure API Endpoints
- **POST /register:** Registers a new user.
- **POST /login:** Logs in an existing user.
- **GET /files/get:** Retrieves all users and their associated files.
- **PUT /user/update/:id:** Updates user details or files.
- **DELETE /user/delete/:id:** Deletes a user profile or a specific file.
- **POST /otp/generate:** Generates and sends an OTP to the user's email.
- **POST /otp/validate:** Validates the OTP entered by the user.
- **GET /user/:id:** Retrieves a specific user's details by ID.

## Front-End

The front-end of the application is built using **React**, ensuring a modern and responsive user interface. 
The React components handle all interactions, such as user registration, login, OTP input, and profile management. 
The UI is designed to be intuitive, providing feedback messages upon success or failure of actions. 
It integrates with the back-end API through **Axios** or **Fetch** to perform CRUD operations and interact with the database.

### Components
- **Registration & Login Forms:** Allow users to register and log in with their credentials.
- **OTP Input Form:** A simple form to enter and validate the OTP sent via email.
- **Profile Management:** A user interface that lets users update their personal details and manage files.
- **File Management:** Enables the addition, update, and deletion of files associated with a user’s account.

## Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** instance running locally or on a cloud service.
- **Gmail account** for sending OTP emails via **Nodemailer**.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-repository-url.git
   cd your-project-folder
   ```

2. Install back-end dependencies:
   ```
   cd server
   npm install
   ```

3. Set up the MongoDB database (either locally or remotely).

4. Update **Nodemailer** settings in the back-end to use your own email credentials for OTP email dispatch.

5. Install front-end dependencies:
   ```
   cd client
   npm install
   ```

6. Run the back-end server:
   ```
   cd server
   npm start
   ```

7. Run the front-end React application:
   ```
   cd client
   npm start
   ```

The application should now be up and running at `http://localhost:3000` for the front-end and `http://localhost:8000` for the back-end.

## Conclusion

This project demonstrates the integration of modern web technologies, ensuring a secure, responsive, and user-friendly experience for registration, login, OTP validation, and profile management. By leveraging **React** for the front-end and **Node.js** with **Express** for the back-end, this full-stack application offers robust functionality that can be expanded further with additional features such as advanced file management, and more.

