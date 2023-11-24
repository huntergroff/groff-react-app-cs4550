import Labs from './Labs';
import HelloWorld from './Labs/a3/HelloWorld'
import Kanbas from './Kanbas';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
            <Route path="/" element={<Navigate to ="/Labs"/>} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/project/*" element={<Project />} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
