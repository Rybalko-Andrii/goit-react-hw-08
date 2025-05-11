import React from "react";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn join-item" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
    </div>

    /* <div>
      <span>{name}</span>
      <span>{number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div> */
  );
};

export default Contact;
