
import styles from "./app.module.css";
import { Aside } from "./components/aside/aside";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Burgers } from "./pages/projects/burgers";
import { Testovoe1 } from "./pages/projects/testovoe1";
import { ComingSoon } from "./pages/projects/comingSoon";
import { Repair } from "./pages/projects/repair";


function App() {
  return (
    <div className={styles.container}>
      <Aside />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/aboutMe" element={<About />} />
        <Route path="/projects/repair" element={<Repair />} />
        <Route path="/projects/burgers/" element={<Burgers />} />
        <Route path="/projects/testovoe1/" element={<Testovoe1 />} />
        <Route path="/projects/comingSoon/" element={<ComingSoon />} />
      </Routes>
    </div>
  )
}
export default App
