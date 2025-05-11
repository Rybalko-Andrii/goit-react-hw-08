import React from "react";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button
            className="btn btn-square btn-sm"
            onClick={() => onDelete(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
