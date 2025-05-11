import React from "react";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className="card bg-base-200 w-80 shadow-sm mt-4">
      <div className=" card-body">
        <div className="card-actions justify-end">
          <button
            className="btn btn-soft btn-error"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Contact;
