import Register from "../components/auth/Register";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const res = await registerUser(data);
      localStorage.setItem("token", res.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return <Register onRegister={handleRegister} />;
};

export default RegisterPage;