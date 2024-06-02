import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import Route from "./Route/Route";
import './index.css';
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={Route} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
