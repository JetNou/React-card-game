import {Route, Routes} from "react-router";
import {App} from "../App.tsx";
import {Login} from "../pages/login/Login.tsx";

export const AppRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  )
}