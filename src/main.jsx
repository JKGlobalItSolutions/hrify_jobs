
import { createRoot } from 'react-dom/client';
<<<<<<< Updated upstream


=======
import './stylesheet/style.css';
import './stylesheet/Footer.css';
import './stylesheet/Favorties.css'; 
import './stylesheet/About.css'; 
>>>>>>> Stashed changes

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);

