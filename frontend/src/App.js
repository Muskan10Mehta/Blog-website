import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './common/components/navbar';
//import Footer from './common/components/footer';
import Settings from './pages/settings';
import Home from './pages/home/';
import ViewPost from './pages/viewpost';
import Write from './pages/write';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';
function App() {
    const { user } = useContext(Context);
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        exact
                        path="/login"
                        element={user ? <Home /> : <Login />}
                    ></Route>
                    <Route
                        exact
                        path="/signup"
                        element={user ? <Home /> : <Signup />}
                    ></Route>
                    <Route
                        exact
                        path="/write"
                        element={user ? <Write /> : <Signup />}
                    ></Route>
                    <Route
                        exact
                        path="/settings"
                        element={user ? <Settings /> : <Signup />}
                    ></Route>
                    <Route
                        exact
                        path="/viewpost/:postID"
                        element={<ViewPost />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
