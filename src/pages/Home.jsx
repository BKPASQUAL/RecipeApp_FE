import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import ReceptTypes from "../components/home/ReceptTypes";
import ItemCard from "../components/home/ItemCard";
import { useGetRecipeByCategoryQuery } from "../store/api/recipeApi";
import { useAddFavouriteRecipeMutation } from "../store/api/favouriteApi";

function Home() {
  const [selectedType, setSelectedType] = useState("Pork");
  const { data, isLoading, error } = useGetRecipeByCategoryQuery(selectedType);
  const [addFavoriteRecipe] = useAddFavouriteRecipeMutation();

  const handleAddFavorite = async (meal) => {
    try {
      await addFavoriteRecipe(meal).unwrap();
      alert(`${meal.strMeal} added to favorites!`);
    } catch (err) {
      console.error("Failed to add favorite:", err);
      alert("Failed to add to favorites.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-32 bg-light-pink">
        <div>
          <ReceptTypes onSelectType={setSelectedType} />
        </div>
        <div className="grid grid-cols-5 gap-12 mt-16">
          {isLoading && <p>Loading recipes...</p>}
          {error && <p>Error loading recipes.</p>}
          {data?.meals?.map((meal) => (
            <ItemCard
              key={meal.idMeal}
              name={meal.strMeal}
              image={meal.strMealThumb}
              selectedType={selectedType}
              onAddFavorite={() => handleAddFavorite(meal)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
