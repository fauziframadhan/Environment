import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  ACTIVITIES,
  DONATE,
  HOME,
  LOGIN,
  MEDIA,
  REGISTER,
  APA,
  PERJALANAN,
  TIGAR,
  PENGELOLAAN,
  VOLUNTEER,
  POHON,
  TPS,
  KIRIM,
  KLAIM,
} from "./routes";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Activities from "./pages/Activities";
import Donate from "./pages/Donate";
import Media from "./pages/Media";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Apa from "./pages/Apa";
import Perjalanan from "./pages/Perjalanan";
import TigaR from "./pages/TigaR";
import Pengelolaan from "./pages/Pengelolaan";
import Volunteer from "./pages/Volunteer";
import Pohon from "./pages/Pohon";
import Tps from "./pages/Tps";
import KirimSampah from "./pages/KirimSampah";
import KlaimReward from "./pages/KlaimReward";
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
        <Route element={<Apa />} path={APA} />
        <Route element={<Perjalanan />} path={PERJALANAN} />
        <Route element={<TigaR />} path={TIGAR} />
        <Route element={<Pengelolaan />} path={PENGELOLAAN} />
        <Route element={<Volunteer />} path={VOLUNTEER} />
        <Route element={<Pohon />} path={POHON} />
        <Route element={<Tps />} path={TPS} />
        <Route element={<KirimSampah />} path={KIRIM} />
        <Route element={<KlaimReward />} path={KLAIM} />
      </Routes>
    </>
  );
}

export default App;
