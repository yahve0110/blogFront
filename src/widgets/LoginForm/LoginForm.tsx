import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../app/store/store";
import { closeModal, setContent } from "../../features/modalSlice/modalSlice";
import { LoginForm } from "./types";
import userAuth from "../../shared/api/userAuth";
import {
  appIsLoading,
  appIsNotLoading,
  userIsLoggedIn,
} from "../../features/appSlice/appSlice";
import { useNavigate } from "react-router-dom";

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const [error, setError] = useState<string | null>(null); // Состояние для хранения ошибки
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    dispatch(appIsLoading()); // Устанавливаем состояние загрузки перед отправкой запроса

    try {
      const response = await userAuth.login(data); // Ожидаем ответ от API
      console.log("Login successful:", response);
      dispatch(closeModal());
      dispatch(userIsLoggedIn());
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Failed to login. Please check your credentials."); // Устанавливаем сообщение об ошибке
    } finally {
      dispatch(appIsNotLoading());
    }
  };

  const handleShowSignUp = () => {
    dispatch(setContent("signUp"));
  };

  return (
    <div className={styles.form}>
      <div>
        <h2>{t("loginHeading")}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>{t("loginEmail")}</label>
            <input
              placeholder={t("email/nickname")}
              {...register("username", {
                required: t("emailNicknameRequired"),
                minLength: { value: 4, message: t("emailNicknameMinLength") },
                maxLength: { value: 30, message: t("emailNicknameMaxLength") },
              })}
              type="text"
            />
            {errors.username && (
              <p className={styles.error}>{errors.username.message}</p>
            )}
          </div>
          <div>
            <label>{t("loginPassword")}</label>
            <input
              type="password"
              placeholder={t("password")}
              {...register("password", {
                required: t("passwordRequired"),
                minLength: { value: 6, message: t("passwordMinLength") },
                maxLength: { value: 20, message: t("passwordMaxLength") },
              })}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
            {error && <p className={styles.error}>{error}</p>}{" "}
            {/* Отображение ошибки, если она есть */}
          </div>
          <Button size="large">{t("loginBtn")}</Button>
        </form>
      </div>
      <span className={styles.signup}>
        <span>{t("noaccount")}</span>
        <p onClick={handleShowSignUp} className={styles.link}>
          {t("signUp")}
        </p>
      </span>
    </div>
  );
};

export default LoginFormComponent;
