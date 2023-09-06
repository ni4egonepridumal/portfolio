
import styles from "./app.module.css";
import { Aside } from "./components/aside/aside";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Project } from "./pages/projects/project";
import { About } from "./pages/about/about";

function App() {
  return (
    <div className={styles.container}>
      <Aside />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/aboutMe" element={<About />} />
      </Routes>
    </div>
  )
}
export default App
