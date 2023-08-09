// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';//Nous permet d'utiliser le routage avec React
import PublicRouter from './Pages/Public/PublicRouter.js';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>

    </div>
  );
}

export default App;
