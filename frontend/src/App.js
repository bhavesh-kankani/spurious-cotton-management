import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import InformationPortal from "./components/InformationPortal";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProfileModal from "./components/ProfileModal";
import AuthProvider from "./context/AuthContext";

const App = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userType, setUserType] = useState("Manufacturer");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        // <div className="App">
        //     <Router>
        //         <AuthProvider>
        //             {isLoggedIn && (
        //                 <NavBar
        //                     setIsLoggedIn={setIsLoggedIn}
        //                     handleOpen={handleOpen}
        //                 />
        //             )}
        //             <Route exact path="/" component={Homepage} />
        //             <Route exact path="/info" component={InformationPortal} />
        //             <Route exact path="/signin" component={SignIn} />
        //             <Route exact path="/signup" component={SignUp} />
        //         </AuthProvider>
        //     </Router>
        // </div>
        <Router>
            <div className="App">
                {isLoggedIn ? (
                    <div className="content">
                        <Switch>
                            <Route
                                exact
                                from="/"
                                component={() => (
                                    <Homepage userType={userType} />
                                )}
                            />
                            <Route
                                exact
                                path="/information"
                                component={InformationPortal}
                            />
                            <Route exact path="/signin" component={SignIn} />
                            <Route exact path="/signup" component={SignUp} />
                        </Switch>
                    </div>
                ) : (
                    <div className="login-register">
                        {isSignIn ? (
                            <SignIn
                                setIsSignIn={setIsSignIn}
                                // REMOVE
                                setIsLoggedIn={setIsLoggedIn}
                            />
                        ) : (
                            <SignUp setIsSignIn={setIsSignIn} />
                        )}
                    </div>
                )}
                {isLoggedIn && (
                    <ProfileModal open={open} handleClose={handleClose} />
                )}
            </div>
        </Router>
    );
};

export default App;
