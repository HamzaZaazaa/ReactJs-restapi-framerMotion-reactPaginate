import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import "../categories/categories.css";
import { Spinner } from "react-bootstrap";

function Categories() {
  const [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => setCategories(res.data))
      // .then(() => categories.push("uncategorized"))
      .finally(() => setLoading((loading = false)))
      .catch((err) => console.log(err));
  }, [categories]);
  const newArr = ["uncategorized", ...new Set(categories)];
  return (
    <div>
      <h1 className='myTitle'>Categories</h1>
      <div className='mappedCards'>
        {!loading ? (
          newArr.map((cat) => {
            return <CategoryCard cat={cat} key={cat} />;
          })
        ) : (
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}

export default Categories;
