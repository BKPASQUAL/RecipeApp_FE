import React from "react";

function ItemCard({ name, image, selectedType, onAddFavorite ,isFavarite}) {
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
            className="material-symbols-outlined text-lg cursor-pointer text-red-500 transition-colors"
            style={
                isFavarite
                  ? { color: "red", fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
                  : { color: "red", fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
              }
            title="Add to favorites"
            onClick={onAddFavorite}
          >
            favorite
          </span>
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
}

export default ItemCard;
