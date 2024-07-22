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
        let message = "Válido!\n";
        response.data.forEach((data, index) => {
          message += `Aluno ${index + 1}:\n`;
          message += `Nome: ${data.name}\n`;
          message += `CPF: ${data.CPF}\n`;
          message += `Email: ${data.email}\n\n`;
        });
        setMsg(message.trim());
        setError("");
      }
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o serv");
      } else if (error.response.status === 401) {
        setError("Credencial inválida");
      }else if (error.response.status === 400) {
        setError(error.response.data.message);
      } else {
        setError("Erro desconhecido");
      }
      setMsg("");
    }
  };

  const formatCPF =(cpf) => {
    if (!cpf) return cpf;
    
    cpf = cpf.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    return cpf;
  }

  return (
    <div className="form-wrap">
      <h2>Digite o nome e cpf</h2>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
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
          value={formatCPF(CPF)}
          maxLength={14}
          onChange={(e) => {
            setCPF(formatCPF(e.target.value));
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
