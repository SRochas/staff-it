import Typography from "@mui/material/Typography";

export type ReportCardHeaderProps = {
  children?: string;
};

const ReportCardHeader = ({ children }: ReportCardHeaderProps) => (
  <Typography gutterBottom variant="h5" component="div">
    {children}
  </Typography>
);

export default ReportCardHeader;
