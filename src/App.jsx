import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home02 from './pages/Home02';
import Header02 from './pages/Header02';
import Footer02 from './pages/Footer02';
import AboutMe02 from './pages/AboutMe02';
import Skills02 from './pages/Skills02';
import Project02 from './pages/Project02';
import ProjectDetail_01 from './pages/ProjectDetail_01';
import ProjectDetail_02 from './pages/ProjectDetail_02';
import ProjectDetail_03 from './pages/ProjectDetail_03';
import ProjectDetail_04 from './pages/ProjectDetail_04';

function App() {
  return (
    <HashRouter>
      {/* <Header02 /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/02" replace />} />
        <Route path="/02" element={<Home02 />}>
          <Route index element={<AboutMe02 />} />
          <Route path="SKILLS" element={<Skills02 />} />
          <Route path="PROJECT" element={<Project02 />} />
          <Route path="PROJECT/detail/01" element={<ProjectDetail_01 />} />
          <Route path="PROJECT/detail/02" element={<ProjectDetail_02 />} />
          <Route path="PROJECT/detail/03" element={<ProjectDetail_03 />} />
          <Route path="PROJECT/detail/04" element={<ProjectDetail_04 />} />
        </Route>
      </Routes>
      <Footer02 />
    </HashRouter>
  )
}

export default App;