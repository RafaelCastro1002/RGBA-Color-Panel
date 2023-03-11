import { useState } from "react";
import ColorPanel from "./components/ColorPanel";
import InputRange from "./components/InputRange";
import { CustomColorInputsPanel } from "./styles";
import randomNumber from "./utils/number";

const App = () => {
  const [redColor, setRedColor] = useState(randomNumber(0, 255));
  const [greenColor, setGreenColor] = useState(randomNumber(0, 255));
  const [blueColor, setBlueColor] = useState(randomNumber(0, 255));
  const [alpha, setAlpha] = useState(1);

  return (
    <>
      <ColorPanel
        background={{
          red: redColor,
          green: greenColor,
          blue: blueColor,
          alpha,
        }}
      />
      <CustomColorInputsPanel>
        <InputRange
          data-cy="red"
          label="Red"
          value={redColor}
          onChange={setRedColor}
        />
        <InputRange
          data-cy="green"
          label="Green"
          value={greenColor}
          onChange={setGreenColor}
        />
        <InputRange
          data-cy="blue"
          label="Blue"
          value={blueColor}
          onChange={setBlueColor}
        />
        <InputRange
          data-cy="alpha"
          label="Alpha"
          value={alpha}
          onChange={setAlpha}
          max={1}
          step={0.1}
        />
      </CustomColorInputsPanel>
    </>
  );
};

export default App;
