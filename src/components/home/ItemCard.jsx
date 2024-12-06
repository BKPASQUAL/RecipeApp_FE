import React from "react";

function ItemCard({ name, image, selectedType }) {
  return (
    <div className="group">
      <div className="bg-black rounded-3xl">
        <img
          src={image}
          alt={name}
          className="w-full object-cover rounded-3xl"
        />
      </div>
      <div className="pt-4 pb-4">
        <div className="flex space-x-3">
          <p className="text-base text-gray-500">{selectedType}</p>
          <span
            className="material-symbols-outlined text-lg cursor-pointer text-red-500  hover:fill-icon"
            title="Add to favorites"
          >
            favorite
          </span>
          <style>
            {`
              .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                transition: font-variation-settings  ease, background-color ;
              }
              .material-symbols-outlined:hover {
                font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              }
            `}
          </style>
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
}

export default ItemCard;
