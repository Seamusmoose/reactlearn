import { useState } from "react";

export default function ButtonState({ count, onClick }) {

    // console.log(count, onClick)
  return (
    <div>
      <button onClick={onClick}>Clicked {count} times</button>
    </div>
  );
}
