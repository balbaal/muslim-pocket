import { useState } from "react";

export const useTasbih = () => {
  const [counter, setCounter] = useState<number>(0);

  const toggleTasbih = (value: number) => {
    if (value > 0) {
      setCounter(value);
    } else {
      setCounter(0);
    }
  };

  const resetCounter = () => {
    const isConfirm = confirm("Yakin ingin mengulang hitungan Tasbih?");
    if (isConfirm) {
      setCounter(0);
    }
  };

  return {
    counter,
    toggleTasbih,
    resetCounter,
  };
};
