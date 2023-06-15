import React, { useState } from "react";
import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";

const SliderContainer = styled("div")({
  width: 300,
  margin: "0 auto",
});

export const DualSliderExample = () => {
  const [range, setRange] = useState([20, 80]);

  const handleChange = (event, newRange) => {
    setRange(newRange);
  };

  return (
    <SliderContainer>
      <Slider
        value={range}
        onChange={handleChange}
        min={0}
        max={100}
        step={1}
        color="primary"
      />
    </SliderContainer>
  );
};
