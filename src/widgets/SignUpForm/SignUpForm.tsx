import React from "react";
import styles from "./SignUpForm.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";
import { useAppDispatch } from "../../app/store/store";
import { setContent } from "../../features/modalSlice/modalSlice";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignUpFormInputs {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  password: string;
  repeatPassword: string;
}

const SignUpForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleShowSignUp = () => {
    dispatch(setContent("signIn"));
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log(data);
    // Add logic to handle form submission, e.g., API call
  };

  return (
    <div className={styles.form}>
      <h2>{t("signInHeading")}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <div>
            <label>{t("signUpEmail")}</label>
            <input
              placeholder={t("email")}
              type="text"
              {...register("email", { required: t("emailRequired") })}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label>{t("signUpNickname")}</label>
            <input
              placeholder={t("nickname")}
              type="text"
              {...register("nickname", { required: t("nicknameRequired") })}
            />
            {errors.nickname && (
              <p className={styles.error}>{errors.nickname.message}</p>
            )}
          </div>
          <div>
            <label>{t("signUpFirstName")}</label>
            <input
              placeholder={t("first name")}
              type="text"
              {...register("firstName", { required: t("firstNameRequired") })}
            />
            {errors.firstName && (
              <p className={styles.error}>{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label>{t("signUpLastName")}</label>
            <input
              placeholder={t("last name")}
              type="text"
              {...register("lastName", { required: t("lastNameRequired") })}
            />
            {errors.lastName && (
              <p className={styles.error}>{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label>{t("loginPassword")}</label>
            <input
              type="password"
              placeholder={t("password")}
              {...register("password", { required: t("passwordRequired") })}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div>
            <label>{t("loginRepeatPassword")}</label>
            <input
              type="password"
              placeholder={t("password")}
              {...register("repeatPassword", {
                required: t("repeatPasswordRequired"),
                validate: (value) =>
                  value === getValues("password") || t("passwordsMustMatch"),
              })}
            />
            {errors.repeatPassword && (
              <p className={styles.error}>{errors.repeatPassword.message}</p>
            )}
          </div>
        </div>
        <Button>{t("loginBtn")}</Button>
      </form>
      <span className={styles.signup}>
        {t("haveAccount")}
        <p onClick={handleShowSignUp} className={styles.link}>
          {t("signIn")}
        </p>
      </span>
    </div>
  );
};

export default SignUpForm;
