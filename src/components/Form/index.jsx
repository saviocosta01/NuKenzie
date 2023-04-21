import "../../styles/form.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Form({ listTransactions, setListTransactions}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function transitions(event) {
    event.preventDefault();
    const obj = {
      id: uuid(),
      description,
      value,
      type,
    };
    

    if (description !== "" && value !== "" && type !== "Escolha um tipo") {
      setListTransactions([...listTransactions, obj]);
    } else {
      alert("Por favor informe os dados necessários");
    }
  }

  return (
    <form onSubmit={transitions} className="content-form">
      <label htmlFor="descricao">Descrição</label>
      <input
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite sua descrição"
        name="description"
        required
      ></input>

      <div className="values">
        <div>
          <label htmlFor="value"> Valor</label>
          <input
            placeholder="1"
            onChange={(event) => setValue(event.target.value)}
            name="value"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="type-value">Tipo de valor</label>
          <select
            onChange={(event) => setType(event.target.value)}
            name="type"
            required
          >
            <option value="Escolha um tipo" hidden>
              Escolha um tipo
            </option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit" onClick={transitions}>
        Inserir valor
      </button>
    </form>
  );
}
