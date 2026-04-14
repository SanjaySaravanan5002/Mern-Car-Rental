import Login from "../components/auth/Login";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await loginUser(data);
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;