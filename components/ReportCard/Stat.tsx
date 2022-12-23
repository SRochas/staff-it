import LinearProgress from "@mui/material/LinearProgress";
import type { LinearProgressProps } from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

export type StatProps = {
  name: string;
  value?: LinearProgressProps["value"];
  color?: LinearProgressProps["color"];
};
const Stat = ({ name, value, color }: StatProps) => {
  return (
    <>
      <Typography variant="body1">{name}</Typography>
      <LinearProgress variant="determinate" value={value} color={color} />
    </>
  );
};

export default Stat;
