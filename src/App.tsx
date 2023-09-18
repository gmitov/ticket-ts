import RequireAuth from "./utils/RequireAth";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./modules/notFound/NotFound";
import ResponsiveDrawer from "./components/navigation/ResponsiveDrawer";

import { UserProfile } from "./modules/userProfile";
import { LogIn } from "./modules/logIn";
import { StatisticsPage } from "./modules/statistics";
import { HomePage } from "./modules/home";
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
                <HomePage />
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
                <StatisticsPage />
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
