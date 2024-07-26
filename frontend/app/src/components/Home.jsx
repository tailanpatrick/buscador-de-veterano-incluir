import { useState } from "react";
import findPeople from "../helpers/findPeople";

import Button from "./ui/Button";
import Input from "./ui/Input";
import InputCpf from "./ui/InputCpf";
import Title from "./ui/Title";
import TableResult from "./ui/TableResult";

const Home = () => {
  const [formData, setFormData] = useState({
    cpf: "",
    email:"",
    name: "",
  });

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [results, setResults] = useState([]);

  const handleChangeInputs = async (e) => {
    const { name, value } = e.target;

    setResults([]);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setMsg("");

    if (
      (name === "cpf" && value.length >= 3) ||
      (name === "name" && value.length >= 3) ||
      (name === "email" && value.length >= 3)
    ) {
      const people = await findPeople(
        { ...formData, [name]: value },
        setError,
        setMsg
      );
      setResults(people);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const people = await findPeople(formData, setError, setMsg);
    setResults(people);
  };

  return (
    <div className="flex flex-col col-span-1 min-h-screen pt-5 items-center bg-white">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <Title />

        <form
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
          method="POST"
        >
          <InputCpf
            name="cpf"
            label="Busque por CPF"
            maxlength="14"
            onChange={handleChangeInputs}
            value={formData.cpf}
          />

          <Input
            name="email"
            label="Busque por Email"
            onChange={handleChangeInputs}
            value={formData.email}
          />

          <Input
            name="name"
            label="Busque por Nome"
            onChange={handleChangeInputs}
            value={formData.name}
          />

          <Button />
        </form>

        <p className="text-red-500 text-center text-lg font-bold p-6">
          {error}
          {msg}
        </p>
      </div>
      <div className="relative flex flex-col justify-center rounded-2xl py-6 bg-transparent bg-clip-border text-gray-700 shadow-none max-w-[95%] overflow-x-scroll [&::-webkit-scrollbar]:hidden border-b-gray-400">
        <TableResult data={results} />
      </div>
    </div>
  );
};

export default Home;
