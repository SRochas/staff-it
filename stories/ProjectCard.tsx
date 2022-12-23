import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

interface ProjectCardProps {}

/**
 * Primary UI component for user interaction
 */
export const ProjectCard = ({}: ProjectCardProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CDF
        </Typography>
        <Typography variant="body1">Energy</Typography>
        <LinearProgress variant="determinate" value={25} color="error" />
      </CardContent>
    </Card>
  );
};
