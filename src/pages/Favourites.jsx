import React from "react";
import Navbar from "../components/common/Navbar";
import { useGetFavouriteRecipesQuery } from "../store/api/favouriteApi";
import FavItemCard from "../components/favourites/favItemCard";

function Favourites() {
  const { data, isLoading, error } = useGetFavouriteRecipesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load favourites</div>;

    
  }

  return (
    <>
      <Navbar />
      <div className="px-32 bg-light-pink h-screen">
        <div className="grid grid-cols-5 gap-12 pt-8">
          {data?.map((recipe) => (
            <FavItemCard
              key={recipe.recipeId} 
              name={recipe.recipeTitle}
              image={recipe.recipeImgURL}
              selectedType={recipe.recipeCategory}
              onAddFavorite={() =>
                console.log(`Added ${recipe.name} to favorites`)
              } 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favourites;
