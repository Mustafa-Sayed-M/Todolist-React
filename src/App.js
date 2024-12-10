import React from "react";
import { ToastContainer } from "react-toastify";
import TodoAppContainer from "./Components/TodoAppContainer/TodoAppContainer";

function App() {
  return (
    <div className="App min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/app-background.jpg)`, backgroundSize: `cover` }}>
      {/*  Toast Container */}
      <ToastContainer />
      {/* Main Content */}
      <main className="w-full">
        {/* Container */}
        <div className="container">
          {/* Todo App Container */}
          <TodoAppContainer />
        </div>
      </main>
    </div>
  );
}

export default App;