import { useState } from "react";
import style from "./index.css";

const AddContact = ({inputsApp}) => {
  const [nomeInput, setNomeInput] = useState("");
  const [cognomeInput, setCognomeInput] = useState("");
  const [numeroInput, setNumeroInput] = useState("");

  const onSendData = (e) => {
    e.preventDefault();
    console.log(nomeInput, cognomeInput, numeroInput)
    inputsApp(nomeInput, cognomeInput, numeroInput);
  };

  return (
    <form onSubmit={onSendData}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="nome"
        value={nomeInput}
        placeholder="nome"
        onChange={(e) => setNomeInput(e.target.value)}
      />
      
      <label htmlFor="surname">Last Name</label>
      <input
        type="text"
        id="cognome"
        value={cognomeInput}
        placeholder="cognome"
        onChange={(e) => setCognomeInput(e.target.value)}
      />
      
      <label htmlFor="number">Phone number</label>
      <input
        type="number"
        id="number"
        value={numeroInput}
        placeholder="numero"
        onChange={(e) => setNumeroInput(e.target.value)}
      />

      <input className="button" type="submit" value="Add" />
    </form>
  );
};

export default AddContact;