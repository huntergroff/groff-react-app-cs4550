import Labs from './Labs/'
import HelloWorld from './Labs/a3/HelloWorld'
import Kanbas from './Kanbas';
import { HashRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <div>
        <Link to="/Labs">Labs</Link>
        <Link to="/Kanbas">Kanbas</Link>
      </div>
          <Routes>
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
