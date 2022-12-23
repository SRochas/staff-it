import Typography from "@mui/material/Typography";

export type ProjectCardHeaderProps = {
  children?: string;
};

const ProjectCardHeader = ({ children }: ProjectCardHeaderProps) => (
  <Typography gutterBottom variant="h5" component="div">
    {children}
  </Typography>
);

export default ProjectCardHeader;
