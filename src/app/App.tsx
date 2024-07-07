import { useSelector } from "react-redux";
import Navbar from "../widgets/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { RootState, useAppDispatch } from "./store/store";
import React, { Suspense, useEffect } from "react";
import Loader from "../widgets/Loader/Loader";
import { userIsLoggedIn } from "../features/appSlice/appSlice";

function App() {
  const theme = useSelector((state: RootState) => state.app.theme);
  const isLoading = useSelector((state: RootState) => state.app.isAppLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const isLogged = localStorage.getItem("token");
    if (isLogged !== null && isLogged !== undefined) {
      dispatch(userIsLoggedIn());
    }
  }, [dispatch]);

  return (
    <>
      <div className={`app ${theme}`}>
        <Navbar />
        <div className="page">
          <div className="main-content">
            <Suspense fallback={<Loader />}>
              {isLoading ? <Loader /> : <Outlet />}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
