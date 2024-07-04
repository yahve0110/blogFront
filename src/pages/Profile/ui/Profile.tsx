import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../../entities/User/model/slice/userSlice";
import { RootState, useAppDispatch } from "../../../app/store/store";
import { useSelector } from "react-redux";
import styles from "./Profile.module.scss"

const Profile = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem("token")) {
    navigate("/");
  }

  const user = useSelector((state: RootState) => state.user);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);



  return (
    <div className={styles.profilePage}>
      <div className={styles.profileCard}>
      {user && (
        <div>
          <p>{t("profileName")}: {user.entities?.firstName}</p>
          <p>{t("secondName")}: {user.entities?.lastName}</p>

        </div>
      )}
      </div>
    </div>
  );
};

export default Profile;
