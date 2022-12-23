import Typography from "@mui/material/Typography";

export type HeaderProps = {
  children?: string;
};

const Header = ({ children }: HeaderProps) => (
  <Typography gutterBottom variant="h5" component="div">
    {children}
  </Typography>
);

export default Header;
