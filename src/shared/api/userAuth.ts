import axios from "axios";
import { LoginForm } from "../../widgets/LoginForm/types";
import { BASE_URL } from "./common";

export const userAuthAPI = {
  login: async (authData: LoginForm) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, authData);
      const { token } = response.data;
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  register: async (authData: LoginForm) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, authData);
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  getInfo: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};

export default userAuthAPI;
