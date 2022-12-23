import LinearProgress from "@mui/material/LinearProgress";
import type { LinearProgressProps } from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

export type ProjectCardStatProps = {
  name: string;
  value?: LinearProgressProps["value"];
  color?: LinearProgressProps["color"];
};
const ProjectCardStat = ({ name, value, color }: ProjectCardStatProps) => {
  return (
    <>
      <Typography variant="body1">{name}</Typography>
      <LinearProgress variant="determinate" value={value} color={color} />
    </>
  );
};

export default ProjectCardStat;
