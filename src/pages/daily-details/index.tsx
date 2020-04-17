import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './index.module.css';
import Breadcrumb from '../../components/breadcrumb';

const DailyDetails: React.FC<{}> = () => {
  const match = useRouteMatch<{ date: string }>();
  return (
    <div className={styles.pageWrapper}>
      <Breadcrumb>
        <Link to="/daily-trend">Stats By Countries</Link>
        <span>{match.params.date}</span>
      </Breadcrumb>
      Coming Soon
    </div>
  );
};

export default DailyDetails;
