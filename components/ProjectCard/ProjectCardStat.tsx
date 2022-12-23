import LinearProgress from "@mui/material/LinearProgress";
import type { LinearProgressProps } from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";
import { useMemo } from "react";

export type ProjectCardStatProps = {
  name: string;
  value?: LinearProgressProps["value"];
};
const ProjectCardStat = ({ name, value }: ProjectCardStatProps) => {
  const color = useMemo(() => {
    if (value > 0) {
      return "success";
    }
    if (value < 0) {
      return "error";
    }
    return "warning";
  }, [value]);

  return (
    <>
      <Typography variant="body1">{name}</Typography>
      <LinearProgress
        variant="determinate"
        value={Math.abs(value)}
        color={color}
      />
    </>
  );
};

export default ProjectCardStat;
