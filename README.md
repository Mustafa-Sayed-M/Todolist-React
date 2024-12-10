# Todo List Application

This is a simple and interactive Todo List application built using **React** and styled with **TailwindCSS**. It is designed to help users organize their tasks efficiently. The project also integrates features like user authentication with Clerk and state management with React Query.

---

## Features

- **Task Management**: Add, edit, delete, and mark tasks as complete.
- **Loading Skeletons**: Displays a skeleton UI while data is being fetched.
- **Global State Management**: Efficiently manage application state with React Query.
- **Toast Notifications**: Provides real-time feedback for user actions using React Toastify.
- **Authentication**: User authentication with Clerk.
- **Responsive Design**: Fully responsive design with TailwindCSS.

---

## Technologies Used

- **React**: Front-end library for building the user interface.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Query**: For server-state management and API data fetching.
- **React Toastify**: For toast notifications.
- **Clerk**: Authentication service for user login and signup.

---

## Folder Structure

```plaintext
src
├── Components
│   ├── Skeletons         # Components for loading skeletons
│   ├── TodoAppContainer  # Main container for the Todo app
│   └── LoadingSpinner.jsx
├── Utils
│   ├── api.js            # Contains API-related functions
│   └── handlers.js       # Contains utility functions
├── App.js                # Main application file
```

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-list
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_BACKEND_API=backend_api
   REACT_APP_ACCESS_TOKEN=access_token
   REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_publish_key
   ```

   - For `api` and `access_token` contact me [01122124968](https://wa.link/aa9g4i)

5. Start the development server:
   ```bash
   npm start
   ```

---

## Scripts

- `npm start`: Runs the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm eject`: Ejects the app configuration (not recommended).

---

## Contribution

If you'd like to contribute:

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it.

---

## Contact

For any inquiries or feedback, please contact:

- **Name**: Mustafa Sayed
- **Email**: mustafa-coder9@gmail.com
- **GitHub**: [Mustafa Sayed](https://github.com/mustafa-sayed-m)
