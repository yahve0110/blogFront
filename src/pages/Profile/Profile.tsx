import React from "react";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t("welcome")}</div>
    </div>
  );
};

export default Profile;
