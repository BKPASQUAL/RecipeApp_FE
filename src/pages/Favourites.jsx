import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import {
  useGetFavouriteRecipesQuery,
  useRemoveFavouriteRecipeMutation,
} from "../store/api/favouriteApi";
import Swal from "sweetalert2";
import ItemCard from "../components/common/ItemCard";
import RecipeDetails from "../components/Models/ReceptDetals";

function Favourites() {
  const { data, isLoading, error, refetch } = useGetFavouriteRecipesQuery();
  const [removeFavourites] = useRemoveFavouriteRecipeMutation();
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (recipeId) => {
    setSelectedRecipeId(recipeId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRecipeId(null);
    setModalOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load favourites</div>;
  }

  const handleRemoveFavourites = async (id) => {
    try {
      const response = await removeFavourites(id).unwrap();

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "success",
        title: response?.message || "Recipe removed successfully",
      });

      refetch();
    } catch (err) {
      Swal.fire({
        title: "Oops...",
        text: err?.data?.message || "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="px-32 bg-light-pink h-screen">
        <div className="grid grid-cols-5 gap-12 pt-8">
          {data?.map((recipe) => (
            <ItemCard
              key={recipe.recipeId}
              name={recipe.recipeTitle}
              image={recipe.recipeImgURL}
              selectedType={recipe.recipeCategory}
              isFavarite={true}
              onAddFavorite={() => handleRemoveFavourites(recipe.recipeId)}
              onClick={() => handleOpenModal(recipe.recipeId)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && selectedRecipeId && (
        <RecipeDetails
          recipeId={selectedRecipeId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Favourites;
