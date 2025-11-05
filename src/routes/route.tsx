import {Route, Routes} from "react-router";
import {App} from "../App.tsx";

export const LoginRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/' element={<App />}/>
    </Routes>
  )
}