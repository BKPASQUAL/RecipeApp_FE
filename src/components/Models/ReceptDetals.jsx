import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import { useGetRecipeByIdQuery } from "../../store/api/recipeApi";

function RecipeDetails({ recipeId, onClose }) {
  const {
    data: recipeData,
    isLoading,
    error,
  } = useGetRecipeByIdQuery(recipeId);
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  const recipe = recipeData?.meals?.[0];
  const toggleInstructions = () =>
    setShowFullInstructions(!showFullInstructions);

  if (!recipeId) return null;

  return (
    <Modal open={!!recipeId} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          bgcolor: "#f9f9f9",
          borderRadius: 5,
          boxShadow: 24,
          px: 5,
          py: 5,
          maxHeight: "90vh",
          overflowY: "auto",
          outline: "none",
          "@media (max-width: 768px)": { width: "90%", px: 3 },
        }}
      >
        {isLoading && (
          <Box className="flex justify-center items-center min-h-[300px]">
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography
            variant="h6"
            sx={{ color: "red", textAlign: "center", fontWeight: 500 }}
          >
            Failed to load the recipe. Please try again.
          </Typography>
        )}

        {recipe && (
          <>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#333",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {recipe.strMeal}
              </Typography>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                style={{
                  borderRadius: "10px",
                  maxWidth: "50%",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  display: "block", 
                  margin: "0 auto", 
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 3,
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ textAlign: "center", flex: 1 }}>
                <Typography
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "#555" }}
                >
                  Category
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "#666" }}>
                  {recipe.strCategory}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", flex: 1 }}>
                <Typography
                  sx={{ fontSize: "1rem", fontWeight: "bold", color: "#555" }}
                >
                  Area
                </Typography>
                <Typography sx={{ fontSize: "1rem", color: "#666" }}>
                  {recipe.strArea}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  mb: 2,
                  color: "#333",
                }}
              >
                Instructions
              </Typography>
              <Typography sx={{ color: "#666", lineHeight: "1.8" }}>
                {showFullInstructions
                  ? recipe.strInstructions
                  : `${recipe.strInstructions.slice(0, 200)}...`}
                <span
                  onClick={toggleInstructions}
                  style={{
                    color: "#007BFF",
                    fontWeight: "bold",
                    cursor: "pointer",
                    marginLeft: "8px",
                  }}
                >
                  {showFullInstructions ? "Read Less" : "Read More"}
                </span>
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  mb: 2,
                  color: "#333",
                }}
              >
                Ingredients
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  padding: 0,
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {Array.from({ length: 20 }, (_, i) => {
                  const ingredient = recipe[`strIngredient${i + 1}`];
                  const measure = recipe[`strMeasure${i + 1}`];
                  return (
                    ingredient && (
                      <li key={i}>
                        <strong>{ingredient}</strong>
                        {measure && ` (${measure})`}
                      </li>
                    )
                  );
                })}
              </ul>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default RecipeDetails;
