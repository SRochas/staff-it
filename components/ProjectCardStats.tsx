import ProjectCardStat from "./ProjectCard/ProjectCardStat";

export type ProjectCardStatsProps = Record<
  "energy" | "credibility" | "qualityOfLife" | "skills" | "socialCapital",
  number
>;

const ProjectCardStats = ({
  energy,
  credibility,
  qualityOfLife,
  skills,
  socialCapital,
}: ProjectCardStatsProps) => {
  return (
    <>
      <ProjectCardStat name="Energy" value={energy} />
      <ProjectCardStat name="Credibility" value={credibility} />
      <ProjectCardStat name="Quality of life" value={qualityOfLife} />
      <ProjectCardStat name="Skills" value={skills} />
      <ProjectCardStat name="Social capital" value={socialCapital} />
    </>
  );
};

export default ProjectCardStats;
