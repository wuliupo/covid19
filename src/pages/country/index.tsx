import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styles from './index.module.css';
import Breadcrumb from '../../components/breadcrumb';

const Country: React.FC<{}> = () => {
  const match = useRouteMatch<{ country: string }>();
  return (
    <div className={styles.pageWrapper}>
      <Breadcrumb>
        <Link to="/countries">Stats By Countries</Link>
        <span>{match.params.country}</span>
      </Breadcrumb>
      Coming Soon
    </div>
  );
};

export default Country;
