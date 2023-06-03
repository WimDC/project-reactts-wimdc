import { useEffect, useState } from "react";

const magenta = "#FF00FF";
const yellow = "#FFFF00";
const cyan = "#00FFFF";

export const useCycleColor = () => {
  const [buttonColor, setButtonColor] = useState(yellow);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setButtonColor((prevColor) => {
        if (prevColor === yellow) {
          return cyan;
        } else if (prevColor === cyan) {
          return magenta;
        } else {
          return yellow;
        }
      });
    }, 1000);

    return () => clearInterval(colorInterval);
  }, []);

  return buttonColor;
};
