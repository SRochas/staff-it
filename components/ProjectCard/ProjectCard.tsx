import React from "react";
import type { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import type { SxProps, Theme } from "@mui/material";

interface ProjectCardProps {
  sx?: SxProps<Theme>;
  children?: ReactNode | ReactNode[];
}

/**
 * Primary UI component for user interaction
 */
const ProjectCard = ({ sx, children }: ProjectCardProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345, ...sx }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ProjectCard;
