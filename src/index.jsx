import React from 'react'
import { createRoot } from 'react-dom/client'
/* React Router dom for navigation*/
import { BrowserRouter } from 'react-router-dom'

/* Mdb React for styling*/
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

/* Css */
import './index.css'
import App from './App'


const Container = document.getElementById('root')
const Root = createRoot(Container)
Root.render(<BrowserRouter>
  <App />
</BrowserRouter>
)