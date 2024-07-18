import axios from "axios";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/verificador",
        JSON.stringify({ name, CPF }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        setMsg(
          `Valído!\nNome: ${response.data.name}\nCPF: ${response.data.CPF}\nEmail: ${response.data.email}`
        );
        setError("");
      }
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o serv");
      } else if (error.response.status === 401) {
        setError("Credencial inválida");
      } else {
        setError("Erro desconhecido");
      }
      setMsg("");
    }
  };
  return (
    <div className="form-wrap">
      <h2>Digite o nome e cpf</h2>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
          onChange={(e) => {
            setName(e.target.value);
            setError("");
            setMsg("");
          }}
        ></input>
        <input
          type="text"
          name="CPF"
          placeholder="CPF"
          maxLength={11}
          size={11}
          //minLength={11}
          required
          onChange={(e) => {
            setCPF(e.target.value);
            setError("");
            setMsg("");
          }}
        ></input>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
      <p className="errorMsg">{error}</p>
      <p style={{ whiteSpace: "pre-line" }}>{msg}</p>
    </div>
  );
}
export default Login;
