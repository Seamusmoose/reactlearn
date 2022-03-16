import ButtonState from "./buttonState/ButtonState";
import { useEffect, useState } from "react";
import FilterableProductTable from "./filterableProducts/FilterableProductTable";

export default function MyApp({products}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

//   useEffect(() => {
//     console.log(count);
//   });

  return (
    <div>
      <FilterableProductTable products={products} />

      <ButtonState count={count} onClick={handleClick} />
      <ButtonState count={count} onClick={handleClick} />
    </div>
  );
}
