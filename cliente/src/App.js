import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Router from './routes/Routes';

const App = () => {

  return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  );
}

export default App;

