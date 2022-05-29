import React from 'react';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom/client';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


createRoot(document.getElementById('root')).render(<App />); // updated to React v18