import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8001/api/";

export const login = async (email, password) => {
  try {
    let response = await axios.post("token/", {
      email: email,
      password: password,
    });

    if (response.data.access) {
      const authService = {
        user: response.data,
      };
      localStorage.setItem("authService", JSON.stringify(authService));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

const AuthService = {
  login,
};

export default AuthService;
