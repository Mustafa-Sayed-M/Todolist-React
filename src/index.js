import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Font Awesome:
import "@fortawesome/fontawesome-free/css/all.min.css";

// React Toastify:
import 'react-toastify/dist/ReactToastify.css';

// React Query / Tanstack:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClerkProvider } from '@clerk/clerk-react';

// Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClerkProvider
        publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
        afterSignOutUrl={process.env.PUBLIC_URL}
        signInForceRedirectUrl={process.env.PUBLIC_URL}
        signUpForceRedirectUrl={process.env.PUBLIC_URL}
      >
        <App />
      </ClerkProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();