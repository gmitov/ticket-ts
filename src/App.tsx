import RequireAuth from "./utils/RequireAth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ResponsiveDrawer from "./components/navigation/ResponsiveDrawer";
import UserProfile from "./pages/UserProfile";
import Statistics from "./pages/Statistics";
import LogIn from "./pages/LogIn";

import { TicketsPage } from "./modules/tickets";
import { TicketDataPage } from "./modules/ticketData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <ResponsiveDrawer>
                <Home />
              </ResponsiveDrawer>
            </RequireAuth>
          }
        />

        <Route path="/login" element={<LogIn />} />

        <Route
          path="/tickets"
          element={
            <RequireAuth>
              <ResponsiveDrawer>
                <TicketsPage />
              </ResponsiveDrawer>
            </RequireAuth>
          }
        />

        <Route
          path="/statistics"
          element={
            <RequireAuth>
              <ResponsiveDrawer>
                <Statistics />
              </ResponsiveDrawer>
            </RequireAuth>
          }
        />

        <Route
          path="/user-profile"
          element={
            <RequireAuth>
              <ResponsiveDrawer>
                <UserProfile />
              </ResponsiveDrawer>
            </RequireAuth>
          }
        />

        <Route
          path="/ticket/:id"
          element={
            <RequireAuth>
              <ResponsiveDrawer>
                <TicketDataPage />
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
