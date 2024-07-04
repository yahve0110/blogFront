import axios, { AxiosResponse } from "axios";
import { User } from "../model/types/User";
import { BASE_URL } from "../../../shared/api/common";

export const userInfoAPI = {
  fetchUser: async (token: string | null) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response: AxiosResponse<User> = await axios.get(
        `${BASE_URL}/user/me`,
        config
      );
      return response.data;
    } catch (error) {
      console.error("Error getting user data:", error);
      throw error;
    }
  },
};
