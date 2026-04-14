import { useState } from "react";

const Login = ({onLogin})=>{
    const [email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        onLogin({email,password});
    };
    return (
    <form onSubmit={submitHandler}>
    <h2>Login</h2>

    <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
    />

    <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
    />

    <button>Login</button>
    </form>
    );
};
export default Login;