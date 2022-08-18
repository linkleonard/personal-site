import styles from "./WorkHistory.module.scss";

import Card from "./ui/Card";
import workExperience from "../data/experience";
import TimePeriod from "./ui/TimePeriod";
import { Time } from "../data/types";
import FloatTag from "./ui/FloatTag";

interface ExperienceProps {
  company: string;
  period: { start: Time; end: Time };
  location: string;
  title: string;
  responsibilities: string[];
}

const Experience = ({
  company,
  period: { start, end },
  location,
  title,
  responsibilities,
}: ExperienceProps) => (
  <Card className={styles.experience} component="li">
    <span className={styles.title}>{title}</span>
    <FloatTag>
      <TimePeriod start={start} end={end} />
    </FloatTag>
    <div className={styles.company}>
      <span className={styles.companyName}>{company}</span>
      <span className={styles.location}>{location}</span>
    </div>

    <ul className={styles.responsibilities}>
      {responsibilities.map((r, i) => (
        <li className={styles.responsibility} key={i}>
          {r}
        </li>
      ))}
    </ul>
  </Card>
);

const WorkHistory = () => (
  <ul className={styles.history}>
    {workExperience.map((e, i) => (
      <Experience key={i} {...e} />
    ))}
  </ul>
);

export default WorkHistory;
