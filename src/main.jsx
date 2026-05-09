import { StrictMode } from 'react'
import {createElement} from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './App.css';
import './index.css';
const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);




