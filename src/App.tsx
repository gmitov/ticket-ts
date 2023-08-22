import Tickets from "./pages/Tickets";
import RequireAuth from "./helpers/RequireAth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import PrimaryAppBar from "./components/PrimaryAppBar";
import ResponsiveDrawer from "./components/navigation/ResponsiveDrawer";
import TicketData from "./pages/TicketData";
import UserProfile from "./pages/UserProfile";
import Statistics from "./pages/Statistics";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <>
                <ResponsiveDrawer>
                  <Home />
                </ResponsiveDrawer>
              </>
            </RequireAuth>
          }
        />

        <Route path="/login" element={<LogIn />} />

        <Route
          path="/tickets"
          element={
            <RequireAuth>
              <>
                <ResponsiveDrawer>
                  <Tickets />
                </ResponsiveDrawer>
              </>
            </RequireAuth>
          }
        />

        <Route
          path="/statistics"
          element={
            <RequireAuth>
              <>
                <ResponsiveDrawer>
                  <Statistics />
                </ResponsiveDrawer>
              </>
            </RequireAuth>
          }
        />

        <Route
          path="/user-profile"
          element={
            <RequireAuth>
              <>
                <ResponsiveDrawer>
                  <UserProfile />
                </ResponsiveDrawer>
              </>
            </RequireAuth>
          }
        />

        <Route
          path="/ticket/:id"
          element={
            <RequireAuth>
              <ResponsiveDrawer>
                <TicketData />
              </ResponsiveDrawer>
            </RequireAuth>
          }
        />

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
