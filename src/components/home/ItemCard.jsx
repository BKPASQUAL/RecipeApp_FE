import React from "react";

function ItemCard({ name, image, selectedType }) {
  return (
    <div>
      <div className="bg-black rounded-3xl">
        <img
          src={image}
          alt={name}
          className="w-full object-cover rounded-3xl"
        />
      </div>
      <div className="h-1/3 p-4">
        <p className="text-sm text-gray-500">{selectedType}</p>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
}

export default ItemCard;
