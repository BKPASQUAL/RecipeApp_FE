import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/common/Navbar";
import ReceptTypes from "../components/home/ReceptTypes";
import ItemCard from "../components/common/ItemCard";
import { useGetRecipeByCategoryQuery } from "../store/api/recipeApi";
import { useAddFavouriteRecipeMutation, useGetFavouriteRecipesQuery } from "../store/api/favouriteApi";
import ReceptDetails from "../components/Models/ReceptDetals";

function Home() {
  const [selectedType, setSelectedType] = useState("Pork");
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const { data, isLoading, error } = useGetRecipeByCategoryQuery(selectedType);
  const [addFavoriteRecipe] = useAddFavouriteRecipeMutation();
  const { refetch } = useGetFavouriteRecipesQuery();

  const handleOpenModal = (recipeId) => {
    setSelectedRecipeId(recipeId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRecipeId(null);
    setModalOpen(false);
  };

  const handleAddFavorite = async (meal) => {
    const {
      idMeal: recipeId,
      strMeal: recipeTitle,
      strMealThumb: recipeImgURL,
    } = meal;

    try {
      const response = await addFavoriteRecipe({
        recipeId,
        recipeTitle,
        recipeCategory: selectedType,
        recipeImgURL,
      });
      refetch()
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      if (response.error) {
        Toast.fire({
          icon: "warning",
          title:
            response.error.data?.message || "Recipe already in favourites.",
        });
      } else {
        Toast.fire({
          icon: "success",
          title: response.data?.message || "Recipe added to favourites!",
        });
      }
    } catch (error) {
      console.error("Error adding recipe to favourites:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to add recipe to favourites.",
        text: "Please try again later.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
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
              onClick={() => handleOpenModal(meal.idMeal)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && selectedRecipeId && (
        <ReceptDetails
          recipeId={selectedRecipeId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Home;
