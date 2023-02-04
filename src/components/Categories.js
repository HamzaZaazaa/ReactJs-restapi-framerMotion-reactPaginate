import React, { useState, useEffect } from "react";
import axios from "axios";
function Categories() {
  const [categories, setCategories] = useState([
    {
      category: "",
      id: "",
    },
  ]);

  useEffect(() => {
    try {
      axios
        .get("https://api.chucknorris.io/jokes/categories")
        .then((res) => setCategories({ category: res.data, id: "" }))
        .catch((err) => console.log(err));
      console.log(categories);
    } catch (error) {
      console.log(error);
    }
  }, [categories]);
  return (
    <div>
      {/* {test.map((cate) => {
        return <h1 key={cate.id}>hello</h1>;
      })} */}
    </div>
  );
}

export default Categories;
