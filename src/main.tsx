import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from './App.tsx'
import './index.css'
import {Login} from "./pages/login/Login.tsx";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </StrictMode>,
)
