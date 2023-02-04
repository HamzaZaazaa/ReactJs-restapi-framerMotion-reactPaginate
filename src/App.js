import React from "react";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import NavBarr from "./components/NavBarr";
function App() {
  return (
    <div>
      <NavBarr />
      <Routes>
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
