import RequireAuth from "./utils/RequireAth";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/home/Home";
import NotFound from "./modules/notFound/NotFound";
import ResponsiveDrawer from "./components/navigation/ResponsiveDrawer";
import UserProfile from "./modules/userProfile/UserProfile";
import Statistics from "./modules/pages_old/Statistics";
import LogIn from "./modules/logIn/LogIn";

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
