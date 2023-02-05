import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../CategoryCard";
import "../categories/categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://api.chucknorris.io/jokes/categories")
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [categories]);
  return (
    <div className='mappedCards'>
      {categories.map((cat) => {
        return <CategoryCard cat={cat} key={cat} />;
      })}
    </div>
  );
}

export default Categories;
