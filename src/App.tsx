import LogIn from "./pages/LogIn";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { RootState } from "./store/store";
// import { useSelector } from "react-redux";
// import { userSlice } from "./features/userSlice";

function App() {
  // const userState = useSelector((state: RootState) => state[userSlice.name]);
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? null : <Route path="/" element={<LogIn />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
