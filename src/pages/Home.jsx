import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import ReceptTypes from "../components/home/ReceptTypes";
import ItemCard from "../components/home/ItemCard";
import { useGetRecipeByCategoryQuery } from "../store/api/recipeApi";

function Home() {
  const [selectedType, setSelectedType] = useState("Pork");
  const { data, isLoading, error } = useGetRecipeByCategoryQuery(selectedType);

  return (
    <>
      <Navbar />
      <div className="px-28">
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
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;