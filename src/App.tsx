import Tickets from "./pages/Tickets";
import RequireAuth from "./helpers/RequireAth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route
          path="/tickets"
          element={
            <RequireAuth>
              <Tickets />
            </RequireAuth>
          }
        />

        <Route path="/ticket/:id" element={<></>} />

        <Route
          path="*"
          element={
            <RequireAuth>
              <NotFound />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
