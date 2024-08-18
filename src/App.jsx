import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WorkoutPlan from "./components/WorkoutPlan";
import ProgressTracker from "./components/ProgressTracker";
import Settings from "./components/Settings";
import Footer from "./components/Footer";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./styles/App.css";

const auth = getAuth(); // initializing firebase auth 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // state to track user log in status (logged in or not)   

  // useEffect to monitor authentication state changes 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="wrapper"> {/* Added wrapper class */}
          <Navbar />
          <main>
            <Routes>
              <Route
                path="/"
                element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/workout-plan"
                element={
                  isAuthenticated ? <WorkoutPlan /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/progress-tracker"
                element={
                  isAuthenticated ? <ProgressTracker /> : <Navigate to="/login" />
                }
              />
              <Route
                path="/settings"
                element={isAuthenticated ? <Settings /> : <Navigate to="/login" />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
