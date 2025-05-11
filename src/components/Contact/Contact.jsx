import React from "react";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
