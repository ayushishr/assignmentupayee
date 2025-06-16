import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="m-0 p-0 w-full max-w-screen overflow-x-hidden flex flex-col justify-center items-center ">
      <Routes>
        <Route path="/" element={<Login />} />
        {isAuthenticated && <Route path="/home" element={<Home />} />}
      </Routes>
    </div>
  )
}

export default App
