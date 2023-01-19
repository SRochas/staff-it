import Typography from "@mui/material/Typography";

export type CardHeaderProps = {
  children?: string;
};

const CardHeader = ({ children }: CardHeaderProps) => (
  <Typography gutterBottom variant="h5" component="div">
    {children}
  </Typography>
);

export default CardHeader;
