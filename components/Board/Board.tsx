import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import type { ReactNode } from "react";

export type BoardProps = {
  children?: ReactNode | ReactNode[];
  header?: string;
};

const Board = ({ header, children }: BoardProps) => {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {header}
        </ListSubheader>
      }
    >
      {children}
    </List>
  );
};

export default Board;
