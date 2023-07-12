import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Mainlayout from "./layout/Mainlayout"
import Recipes from "./pages/Recipes"
import Recipe from "./pages/Recipe"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import useAuthContext from "./context/AuthContext"

const App = () => {
    const { user } = useAuthContext()

    return (
        <>
        <Router>
            <Routes>
                <Route>
                </Route>
                <Route element={<Mainlayout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={ user ? <Home /> : <Login />}/>
                    <Route path="/register" element={ user ? <Home /> : <Register />}/>
                    <Route path="/profile" element={ user ? <Profile /> : <Login />}/>
                    <Route path="/recipes" element={<Recipes />}/>
                    <Route path="/recipe/:uri" element={<Recipe />}/>
                    <Route path='*' element={<Navigate to='/' />} />
                </Route>
            </Routes>
        </Router>
        </>
    )
}

export default App
