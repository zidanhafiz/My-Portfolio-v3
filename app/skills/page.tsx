'use client';
import { skills } from './SkillList';
import styles from './page.module.scss';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <ul>
        {skills.map((list) => (
          <li key={list.name}>
            {list.icon()}
            {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
