import LinearProgress from "@mui/material/LinearProgress";
import type { LinearProgressProps } from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";
import { useMemo } from "react";

const minValue = 0;
const maxValue = 100;

export type CardStatProps = {
  name: string;
  value?: LinearProgressProps["value"];
};
const CardStat = ({ name, value }: CardStatProps) => {
  const color = useMemo(() => {
    if (value > minValue) {
      return "success";
    }
    if (value < minValue) {
      return "error";
    }
    return "warning";
  }, [value]);

  const progressValue = useMemo(() => {
    const absValue = Math.abs(value);
    const cappedValue = absValue > maxValue ? maxValue : absValue;
    return cappedValue;
  }, [value]);

  return (
    <>
      <Typography variant="body1">{name}</Typography>
      <LinearProgress
        variant="determinate"
        value={progressValue}
        color={color}
      />
    </>
  );
};

export default CardStat;
