import React from "react";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className="bg-base-200/70 w-50 rounded-lg p-3 shadow-sm  text-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-400">{number}</p>
        </div>
        <button
          className="bg-red-600/50 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
