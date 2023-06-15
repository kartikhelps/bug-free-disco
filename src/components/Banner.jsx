import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  Button,
  //   styled,
} from "@mui/material";
import { minWidth } from "@mui/system";
import { DualSliderExample } from "./Dual";
import { styled } from "@mui/system";

const SliderContainer = styled("div")({
  width: 300,
  margin: "0 auto",
});

export const Banner = () => {
  const [range, setRange] = useState([2, 4]);

  const handleChange = (event, newRange) => {
    setRange(newRange);
  };
  const [age, setAge] = useState("Faridabad");

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      Banner search your next property from our website
      <Box sx={{ maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange2}
          >
            <MenuItem value={"Gurugram"}>Gurugram</MenuItem>
            <MenuItem value={"Faridabad"}>Faridabad</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1 }}
          alignItems="center"
          justifyContent="space-around"
        >
          {range[0]} cr
          <SliderContainer>
            <Slider
              value={range}
              onChange={handleChange}
              min={2}
              max={6}
              step={0.2}
              color="primary"
            />
          </SliderContainer>
          {range[1]} cr{" "}
          <Button variant="contained" color="primary">
            search -
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
