import { Navigate } from "react-router-dom";

const RequireAuth: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" />; //<LogIn />;
  }

  return children;
};

export default RequireAuth;
