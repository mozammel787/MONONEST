import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Loading from "../Components/Global/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth(); 

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
