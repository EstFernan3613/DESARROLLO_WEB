import React, { memo } from "react";

const Son = memo(({ numero, increment }) => {
  console.log(`Rendering Son ${numero}`);
  return (
    <button onClick={() => increment(numero)}>
      {numero}
    </button>
  );
});

export default Son;