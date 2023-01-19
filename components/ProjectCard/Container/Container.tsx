import React, { type ReactNode } from "react";
import MuiBox from '@mui/material/Box/Box'

export type ContainerProps = {
  children: ReactNode | ReactNode[];
};

const Container = ({ children }: ContainerProps) => <MuiBox>{children}</MuiBox>;

export default Container;
