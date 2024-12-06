import React, { useState } from "react";

function ReceptTypes() {
  const [selectedType, setSelectedType] = useState("Pork");
  const receptTypes = ["Pork", "Beef", "Chicken", "Lamb", "Pasta"];

  return (
    <div className="flex flex-wrap gap-8 pt-8">
      {receptTypes.map((type) => (
        <button
          key={type}
          onClick={() => setSelectedType(type)}
          className={` px-12 py-4 mb-2 md:mb-0 rounded-full font-medium transition duration-300 ${
            selectedType === type
              ? "bg-rose-pink text-pink-50"
              : "bg-transparent border border-rose-pink text-rose-pink"
          } hover:bg-rose-pink hover:text-white`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default ReceptTypes;
