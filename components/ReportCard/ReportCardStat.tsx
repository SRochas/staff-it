import LinearProgress from "@mui/material/LinearProgress";
import type { LinearProgressProps } from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

export type ReportCardStatProps = {
  name: string;
  value?: LinearProgressProps["value"];
  color?: LinearProgressProps["color"];
};
const ReportCardStat = ({ name, value, color }: ReportCardStatProps) => {
  return (
    <>
      <Typography variant="body1">{name}</Typography>
      <LinearProgress variant="determinate" value={value} color={color} />
    </>
  );
};

export default ReportCardStat;
