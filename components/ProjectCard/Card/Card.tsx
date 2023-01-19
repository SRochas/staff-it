import React from "react";
import type { ReactNode } from "react";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import type { SxProps, Theme } from "@mui/material";

interface CardProps {
  sx?: SxProps<Theme>;
  children?: ReactNode | ReactNode[];
}

/**
 * Primary UI component for user interaction
 */
const Card = ({ sx, children }: CardProps) => {
  return (
    <MuiCard variant="outlined" sx={{ maxWidth: 345, ...sx }}>
      <MuiCardContent>{children}</MuiCardContent>
    </MuiCard>
  );
};

export default Card;
