import CardStat from "./CardStat";

export type CardStatsProps = Record<
  "energy" | "credibility" | "qualityOfLife" | "skills" | "socialCapital",
  number
>;

const CardStats = ({
  energy,
  credibility,
  qualityOfLife,
  skills,
  socialCapital,
}: CardStatsProps) => {
  return (
    <>
      <CardStat name="Energy" value={energy} />
      <CardStat name="Credibility" value={credibility} />
      <CardStat name="Quality of life" value={qualityOfLife} />
      <CardStat name="Skills" value={skills} />
      <CardStat name="Social capital" value={socialCapital} />
    </>
  );
};

export default CardStats;
