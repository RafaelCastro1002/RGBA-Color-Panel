import React from "react";
import { Input, InputLabel, InputPanel } from "./styles";

type Props = {
  label: string;
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  max?: number;
  step?: number;
};

const InputRange = ({ label, value, onChange, max = 255, step = 1 }: Props) => {
  return (
    <InputPanel>
      <InputLabel>{label}</InputLabel>
      <Input
        type="range"
        value={value}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        step={step}
      />
    </InputPanel>
  );
};

export default InputRange;
