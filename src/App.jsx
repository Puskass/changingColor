import React, { useState } from "react";
import Form from "./components/Form";
import Grid from "./components/Grid";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [isFilled, setIsFilled] = useState(true);

  const handleFormSubmit = (color, fillType) => {
    setSelectedColor(color);
    setIsFilled(fillType);
  };

  return (
    <div>
      <h1>Color the Squares</h1>
      <Form onSubmit={handleFormSubmit} />
      <Grid selectedColor={selectedColor} isFilled={isFilled} />
    </div>
  );
};

export default App;
