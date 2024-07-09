import { NavLink } from "react-router-dom";
import Moon from "../../app/styles/assets/icons/Moon/Moon";
import Sun from "../../app/styles/assets/icons/Sun/Sun";
import styles from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import { toggleTheme } from "../../features/appSlice/appSlice";
import { RootState, useAppDispatch } from "../../app/store/store";
import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import { openModal } from "../../features/modalSlice/modalSlice";
import SignUp from "../SignUpForm/SignUpForm";
import useLogout from "../../shared/hooks/useLogout";
import { Avatar } from "@mui/material";
import { LocalModal } from "../LocalModal/LocalModal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Navbar: React.FC = memo(() => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : "";

  const isLogged = useSelector((state: RootState) => state.app.isUserLogged);
  const theme = useSelector((state: RootState) => state.app.theme);
  const [isLocalModalOpen, setLocalModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const switchTheme = () => {
    dispatch(toggleTheme());
  };

  const { t, i18n } = useTranslation();

  const toggleLocalModal = () => {
    setLocalModalOpen(!isLocalModalOpen);
  };

  const closeLocalModal = () => {
    setLocalModalOpen(false);
  };

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ru" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const modalContent = useSelector((state: RootState) => state.modal.content);

  const handleLogout = useLogout();

  const logout = () => {
    closeLocalModal();
    handleLogout();
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarstart}>
          <NavLink className={setActive} to="/main">
            {t("navHome")}
          </NavLink>
        </div>

        <div className={styles.navbarend}>
          <div className={styles.loginText}>
            <LocalModal show={isLocalModalOpen ? true : false}>
              {isLogged && (
                <NavLink to="/profile" onClick={closeLocalModal}>
                  {t("navProfile")}
                </NavLink>
              )}
              {isLogged && (
                <NavLink to="/createPost" onClick={closeLocalModal}>
                  {t("createPost")}
                </NavLink>
              )}
              {isLogged && (
                <span className={styles.logout} onClick={logout}>
                  {t("logout")}
                </span>
              )}
            </LocalModal>

            {!isLogged && (
              <span onClick={handleOpenModal}>{t("navLogin")}</span>
            )}

            {isLogged && (
              <div className={styles.profileBlock} onClick={toggleLocalModal}>
                <Avatar
                  style={{ width: "25px", height: "25px" }}
                  src="/broken-image.jpg"
                />
                {!isLocalModalOpen ? (
                  <KeyboardArrowDownIcon
                    className={styles.arrow}
                    style={{ width: "20px", height: "20px" }}
                  />
                ) : (
                  <KeyboardArrowUpIcon
                    className={styles.arrow}
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
              </div>
            )}
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
      <div className={styles.themeSwitch} onClick={switchTheme}>
        {theme === "light" ? <Sun /> : <Moon />}
      </div>
    </div>
  );
});

export default Navbar;
