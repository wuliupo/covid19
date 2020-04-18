import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { SimpleTopAppBar, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import { GridCell, Grid, GridRow } from '@rmwc/grid';
import { CircularProgress } from '@rmwc/circular-progress';
import routes from '../../routes';
import icon from './virus.svg';
import styles from './index.module.css';

import 'normalize.css';
import './mdc';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <>
        <SimpleTopAppBar
          title={
            (
              <Link to="/">
                <img className={styles.icon} src={icon} alt="icon" />
              </Link>
            ) as any
          }
          startContent={(
            <Grid align="left">
              <GridRow>
                <GridCell phone={2}><Link className={styles.link} to="/countries">Countries</Link></GridCell>
                <GridCell phone={2}><Link className={styles.link} to="/daily-trend">Daily Trend</Link></GridCell>
              </GridRow>
            </Grid>
          )}
        />
        <TopAppBarFixedAdjust />
        <div className={styles.safeArea}>
          <React.Suspense fallback={(
            <div className={styles.spinnerWrapper}>
              <CircularProgress size="large" />
            </div>
          )}
          >
            <Switch>
              {
                routes.map((props) => (
                  <Route key={props.path} path={props.path} exact={props.exact}>
                    <props.component />
                  </Route>
                ))
              }
            </Switch>
          </React.Suspense>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
