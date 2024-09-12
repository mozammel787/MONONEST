import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Global/Loading";
import { useAuth } from "../Hook/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth(); 
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/signin"} state={{ from: location }} replace />;
};

export default PrivateRouter;
