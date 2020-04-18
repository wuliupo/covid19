import React from 'react';
import isArray from 'lodash/isArray';
import styles from './index.module.css';

const Breadcrumb: React.FC<{}> = ({ children }) => {
  if (!isArray(children)) {
    return <div className={styles.breadcrumb}>{children}</div>;
  }

  const childrenArray = [...children as any];

  return (
    <div className={styles.breadcrumb}>
      {childrenArray.reduce((acc, current, index) => {
        if (index < childrenArray.length - 1) {
          // eslint-disable-next-line
          acc = acc.concat(
            current,
            <span className={styles.seperator} key={current.props.children}> / </span>,
          );
        } else {
          acc.push(current);
        }

        return acc;
      }, [])}
    </div>
  );
};

export default Breadcrumb;
