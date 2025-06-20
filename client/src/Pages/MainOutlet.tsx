import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

const MainOutlet = () => {
  return (
    <>
    <Toaster />
    <Outlet/>
    </>
  )
}

export default MainOutlet