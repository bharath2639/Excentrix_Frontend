import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main";
import Signup from "../src/components/Singup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import styles from "./components/Main/styles.module.css";
import DataTable from "./components/getProjectsList";
/*import Testing from "./components/testing"*/;
/*import ProjectPage from "./components/ProjectPage";*/

const App = () => {
  const user = localStorage.getItem("token");

  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Main />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Redirect any unknown routes to the main page */}
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/project-details/:id" element={<DataTable />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              {/* Redirect from root to login if not authenticated */}
              <Route path="/" element={<Navigate to="/login" replace />} />
              {/* Redirect any unknown routes to the login page */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
