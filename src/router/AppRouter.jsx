import { Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
import About from "../pages/About"
import PrivateRouter from "../router/PrivateRouter"
import Login from "../pages/Login"
import WeatherApp from "../pages/WeatherApp"
import Contact from "../pages/Contact"
import Footer from "../components/Footer"


const AppRouter = () => {
  return (
    <>
<Navbar />

<Routes>
<Route path="/" element={<Home />}  />
<Route path="/about" element={ <About /> } />
<Route path="/contact" element={ <Contact /> } />
<Route path="/login" element={ <Login /> } />

<Route element={ <PrivateRouter /> } >
<Route path="/weatherapp" element={ <WeatherApp /> } />

</Route>

</Routes>
<Footer />
    </>
  )
}

export default AppRouter