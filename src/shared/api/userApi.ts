import axios from "axios";
import { LoginForm } from "../../widgets/components/LoginForm/types";


export const userAuth = {
  login: async (authData: LoginForm) => {
    try {
      const response = await axios.post('http://localhost:8080/login', authData);
      const { token } = response.data;
      localStorage.setItem('token', token);
        } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  register: async (authData: LoginForm) => {
    try {
      const response = await axios.post('http://localhost:3000/register', authData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post('http://localhost:3000/logout');
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error; 
    }
  }
};

export default userAuth;
