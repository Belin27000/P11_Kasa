import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//Nous permet d'utiliser le routage avec React
import PublicRouter from './Pages/Public/PublicRouter.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
