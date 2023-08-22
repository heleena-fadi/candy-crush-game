import { useEffect, useState } from "react";
import "./index.css";

const width = 8;
const candyColors = ["Red", "Orange", "Yellow", "Green", "Blue", "purple"];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

const checkForColumnOfThree = () => {
  for (let i = 0; i < width; i++) {
    const columnOfThree = [i, i + width,  i+ width * 2];
    const decidedColor = currentColorArrangement[i];

    if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
      columnOfThree.forEach(square => currentColorArrangement[square] = '')
    }
    }
}
  const createBoard = () => {
    const randomColorArrangement = [];

    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };
  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
     checkForColumnOfThree();
    }, []);


  console.log(currentColorArrangement);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColors, index) => (
          <img key={index} style={{ background: candyColors }} alt={candyColors} />
        ))}
      </div>
    </div>
  );
};
export default App;

// stopped in 32 minutes