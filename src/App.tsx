import Skills from "./components/SkillsPage";
import Home from "./components/home";
import Projects from "./components/Projects";
import ErrorPage from "./components/errorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const Menu = ["home", "projects", "skills"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand ps-5" href="#">
          Justin Holsclaw
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {Menu.map((menuItem, index) => (
              <a
                className={
                  index === selectedIndex
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                href={`/${menuItem}`}
                onClick={() => {
                  setSelectedIndex(index);
                }}>
                {menuItem}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/skills"
            element={<Skills/>}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
