import "./App.css";
import { useState } from "react";
import ButtonState from "./Components/buttonState/ButtonState";
import FilterableProductTable from "./Components/filterableProducts/FilterableProductTable";
import MyApp from "./Components/MyApp";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <div>
      <MyApp products={PRODUCTS}/>
    </div>
  );
}

export default App;
