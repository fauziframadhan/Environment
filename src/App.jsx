
import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  ACTIVITIES,
  DONATE,
  HOME,
  LOGIN,
  MEDIA,
  REGISTER,
} from "./routes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Activities from "./pages/Activities";
import Donate from "./pages/Donate";
import Media from "./pages/Media";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<AboutUs />} path={ABOUT} />
        <Route element={<Activities />} path={ACTIVITIES} />
        <Route element={<Donate />} path={DONATE} />
        <Route element={<Media />} path={MEDIA} />
        <Route element={<Login />} path={LOGIN} />
        <Route element={<Register />} path={REGISTER} />
      </Routes>
    </>
  );
}

export default App;
