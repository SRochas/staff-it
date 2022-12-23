import React from "react";
import type { ReactNode } from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

interface ProjectCardProps {
  children?: ReactNode | ReactNode[];
}

/**
 * Primary UI component for user interaction
 */
const ProjectCard = ({ children }: ProjectCardProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ProjectCard;
