import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userIsLoggedOut } from "../../features/appSlice/appSlice";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    dispatch(userIsLoggedOut());
    navigate("/");
  }, [dispatch, navigate]);

  return handleLogout;
};

export default useLogout;
