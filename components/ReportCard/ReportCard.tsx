import React from "react";
import type { ReactNode } from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

interface ReportCardProps {
  children?: ReactNode | ReactNode[];
}

/**
 * Primary UI component for user interaction
 */
const ReportCard = ({ children }: ReportCardProps) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ReportCard;
