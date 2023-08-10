import LogIn from "../pages/LogIn";

const RequireAuth: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated) {
    return <LogIn />;
  }

  return children;
};

export default RequireAuth;
