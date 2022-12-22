import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";

interface ReportCardProps {}

/**
 * Primary UI component for user interaction
 */
export const ReportCard = ({}: ReportCardProps) => {
  return (
    <Card variant="outlined" sx={{ width: 200 }}>
      <h1>The new project</h1>
      <LinearProgress variant="determinate" value={25} color="error" />;
    </Card>
  );
};
