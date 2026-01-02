import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Connect';

const App = () => {
  const drawerWidth = 240;
  const [selected, setSelected] = useState('About Me')

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar selected={selected} setSelected={setSelected} />
      <main style={{ margin:"0px 240px 0px 240px", padding: '20px', flexGrow: 1 }}>
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Connect />
      </main>
    </div>
  );
};

export default App;
