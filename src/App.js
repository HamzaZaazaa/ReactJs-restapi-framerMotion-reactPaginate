import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/categories/Categories";
import Jokes from "./components/categories/Jokes";
import NavBarr from "./components/NavBarr";
function App() {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path='/categories' element={<Categories />} />
        <Route path={`/jokes/:cat`} element={<Jokes />} />
      </Routes>
    </div>
  );
}

export default App;
