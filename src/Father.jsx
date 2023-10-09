import React, { useState, useMemo } from "react";
import Son from "./Son";

export const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(1);

  const increment = (num) => {
    setValor(valor + num);
  };

  const memoizedSonComponents = useMemo(() => {
    return list.map((n, idx) => (
      <Son key={idx} numero={n} increment={increment} />
    ));
  }, [list, increment]);

  return (
    <div>
      <h1>Father</h1>
      <p>Total: {valor}</p>
      {memoizedSonComponents}
    </div>
  );
};