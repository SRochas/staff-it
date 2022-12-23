import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent, Typography } from "@mui/material";

interface ReportCardProps {}

/**
 * Primary UI component for user interaction
 */
export const ReportCard = ({}: ReportCardProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CDF
        </Typography>
      </CardContent>
      <LinearProgress variant="determinate" value={25} color="error" />;
    </Card>
  );
};
