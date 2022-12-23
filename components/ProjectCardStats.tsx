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
      {energy && <ProjectCardStat name="Energy" value={energy} />}
      {credibility && (
        <ProjectCardStat name="Credibility" value={credibility} />
      )}
      {qualityOfLife && (
        <ProjectCardStat name="Quality of life" value={qualityOfLife} />
      )}
      {skills && <ProjectCardStat name="Skills" value={skills} />}
      {socialCapital && (
        <ProjectCardStat name="Social capital" value={socialCapital} />
      )}
    </>
  );
};

export default ProjectCardStats;
