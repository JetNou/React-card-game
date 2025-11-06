import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router";
import {AppRouters} from "./routes/AppRouters.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  </StrictMode>,
)
