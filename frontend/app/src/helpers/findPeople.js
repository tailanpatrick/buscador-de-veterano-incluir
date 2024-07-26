import axios from "axios";

const findPeople = async (formData, setError, setMsg) => {
    if (!formData.cpf.trim() && !formData.name.trim()) {
        setError("Ambos os campos estão em branco");
        setMsg("");
        return;
    }

    try {
        const response = await axios.post(
            "http://192.168.100.175:3000/verificador",
            { cpf: formData.cpf, name: formData.name },
            {
                headers: { "Content-Type": "application/json" },
            }
        );

        if (response.status === 200) {
            setError("");
            if (Array.isArray(response.data) && response.data.length > 0) {

                return response.data;
            } else {
                setMsg(response.data.message || "Nenhum aluno encontrado!");
                return response.data;
            }
        }
    } catch (error) {
        console.log(error); // Adicione isto para depuração
        if (!error?.response) {
            setError("Erro ao acessar o servidor");
        } else if (error.response.status === 401) {
            setError("Credencial inválida");
        } else if (error.response.status === 400) {
            setError(error.response.data.message);
        } else {
            setError("Erro desconhecido");
        }
        setMsg("");
    }
}

export default findPeople;
