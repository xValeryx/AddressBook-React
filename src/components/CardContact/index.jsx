import React from "react";

export default function CardContact({ contactData, deleteContact }) {


  return (
    <div className="card_wrapper">
    <div className="card">
      <h2>{contactData.nome}</h2>
      <h2>{contactData.cognome}</h2>
      <h3>{contactData.numero}</h3>
      <button onClick={() => deleteContact(contactData.nome)}>x</button>
    </div>
    </div>
  );
}
