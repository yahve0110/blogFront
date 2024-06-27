import { NavLink } from "react-router-dom";
import Moon from "../../../app/styles/assets/icons/Moon/Moon";
import Sun from "../../../app/styles/assets/icons/Sun/Sun";
import styles from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import { toggleTheme, userIsLoggedOut } from "../../../features/appSlice/appSlice";
import { RootState, useAppDispatch } from "../../../app/store/store";
import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import { openModal } from "../../../features/modalSlice/modalSlice";
import SignUp from "../SignUpForm/SignUpForm";

const Navbar: React.FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : "";

  const isLogged = useSelector((state: RootState) => state.app.isUserLogged);
  const theme = useSelector((state: RootState) => state.app.theme);

  const dispatch = useAppDispatch();

  const switchTheme = () => {
    dispatch(toggleTheme());
  };

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const modalContent = useSelector((state: RootState) => state.modal.content);

  const handleLogout = () =>{
    localStorage.removeItem("token");
    dispatch(userIsLoggedOut());
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarstart}>
        <NavLink className={setActive} to="/main">
          {t("navHome")}
        </NavLink>
        {isLogged && (
          <NavLink className={setActive} to="/profile">
            {t("navProfile")}
          </NavLink>
        )}
      </div>

      <div className={styles.navbarend}>
        <div className={styles.loginText} >
          {isLogged ? (
            <span className={styles.logout} onClick={handleLogout}>{t("logout")}</span>
          ) : (
            <span onClick={handleOpenModal}>{t("navLogin")}</span>
          )}
        </div>
        <div onClick={switchTheme}>
          {theme === "light" ? <Sun /> : <Moon />}
        </div>
        <Modal>
          {modalContent === "signIn" ? (
            <LoginForm />
          ) : modalContent === "signUp" ? (
            <SignUp />
          ) : (
            ""
          )}
        </Modal>
        <button className={styles.langBtn} onClick={toggleLanguage}>
          {i18n.language === "en" ? "Ru" : "En"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
