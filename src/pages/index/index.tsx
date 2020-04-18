import React from 'react';
import { CardPrimaryAction, Card } from '@rmwc/card';
import { GridCell, Grid, GridRow } from '@rmwc/grid';
import useSWR from 'swr';
import { Typography } from '@rmwc/typography';
import CountUp from 'react-countup';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import fetcher from '../../utils/fetch';
import Trend from '../../components/trend';
import WorldTrend from '../../components/world-trend';
import useConfirmedDataByCountry from '../../hooks/data';

function getDeltaSign(delta: number) {
  return delta >= 0 ? '+' : '-';
}

// function getActiveCase(data: any) {
//   return data.confirmed.total - (data.recovered.total + data.deaths.total);
// }

const Index: React.FC<{}> = () => {
  const { data: recoveryData } = useSWR('/api', fetcher, { suspense: true });
  const { data: dailyData } = useSWR('/api/daily', fetcher, { suspense: true });
  const countryData = useConfirmedDataByCountry();

  const currentDateData = dailyData?.[dailyData?.length - 1];

  const prevDateData = dailyData?.[dailyData?.length - 2];

  // const activeDelta = getActiveCase(currentDateData) - getActiveCase(prevDateData);
  const confirmedDelta = currentDateData.confirmed.total - prevDateData.confirmed.total;
  const deathsDelta = currentDateData.deaths.total - prevDateData.deaths.total;
  // const recoveredDelta = currentDateData.recovered.total - prevDateData.recovered.total;

  return (
    <Grid>
      <GridRow>
        <GridCell><Typography use="headline5" tag="h3">Global Trend</Typography></GridCell>
      </GridRow>
      <GridRow>
        <GridCell phone={2} desktop={3}>
          <Card className={classnames(styles.card, styles.activeCard)}>
            <CardPrimaryAction>
              <Typography use="subtitle2">Active</Typography>
              <Typography use="body1">
                <CountUp
                  start={0}
                  end={currentDateData.confirmed.total
                    - (currentDateData.deaths.total + recoveryData.recovered.value)}
                  duration={2.75}
                  separator=","
                />
              </Typography>
            </CardPrimaryAction>
          </Card>
        </GridCell>
        <GridCell phone={2} desktop={3}>
          <Card className={classnames(styles.card, styles.confirmCard)}>
            <CardPrimaryAction>
              <Typography use="subtitle2">Confirmed</Typography>
              <Typography use="body1">
                <CountUp start={0} end={currentDateData.confirmed.total} duration={2.75} separator="," />
              </Typography>
              <Typography use="caption">
                {getDeltaSign(confirmedDelta)}
                <CountUp start={0} end={confirmedDelta} duration={2.75} separator="," />
              </Typography>
            </CardPrimaryAction>
          </Card>
        </GridCell>
        <GridCell phone={2} desktop={3}>
          <Card className={classnames(styles.card, styles.deathCard)}>
            <Typography use="subtitle2">Death</Typography>
            <Typography use="body1">
              <CountUp start={0} end={currentDateData.deaths.total} duration={2.75} separator="," />
            </Typography>
            <Typography use="caption">
              {getDeltaSign(deathsDelta)}
              <CountUp start={0} end={deathsDelta} duration={2.75} separator="," />
            </Typography>
          </Card>
        </GridCell>
        <GridCell phone={2} desktop={3}>
          <Card className={classnames(styles.card, styles.recoverdCard)}>
            <Typography use="subtitle2">Recovered</Typography>
            <Typography use="body1">
              <CountUp start={0} end={recoveryData.recovered.value} duration={2.75} separator="," />
            </Typography>
          </Card>
        </GridCell>
      </GridRow>
      <GridRow className={styles.charts}>
        <GridCell desktop={6}>
          <Card className={styles.trendCard}>
            <Trend />
          </Card>
        </GridCell>
        <GridCell desktop={6}>
          <Card className={styles.trendCard}>
            <WorldTrend />
          </Card>
        </GridCell>
      </GridRow>
      <GridRow>
        <GridCell><Typography use="headline5" tag="h3">Top Countries</Typography></GridCell>
      </GridRow>
      <GridRow>
        {
          countryData.slice(0, 9).map(({
            country, confirmed, deaths, recovered, iso3, iso2,
          }) => (
            <GridCell span={2} key={country}>
              <Card className={styles.card}>
                <CardPrimaryAction>
                  <Link to={`/countries/${iso3}`}>
                    <Typography use="subtitle1" className={styles.countryRow} tag="div">
                      <img src={`https://www.countryflags.io/${iso2}/flat/16.png`} alt={country} />
                      {country}
                    </Typography>
                    <Typography use="body2" tag="div">
                      <Typography use="caption" tag="span">
                        confirmed:&nbsp;
                      </Typography>
                      <CountUp
                        start={0}
                        end={confirmed}
                        duration={2.75}
                        separator=","
                      />
                    </Typography>
                    <Typography use="body2" tag="div">
                      <Typography use="caption" tag="span">
                        deaths:&nbsp;
                      </Typography>
                      <CountUp
                        start={0}
                        end={deaths}
                        duration={2.75}
                        separator=","
                      />
                    </Typography>
                    <Typography use="body2" tag="div">
                      <Typography use="caption" tag="span">
                        recovered:&nbsp;
                      </Typography>
                      <CountUp
                        start={0}
                        end={recovered}
                        duration={2.75}
                        separator=","
                      />
                    </Typography>
                  </Link>
                </CardPrimaryAction>
              </Card>
            </GridCell>
          ))
        }
        <GridCell span={2}>
          <Card className={styles.card}>
            <CardPrimaryAction>
              <Link to="/countries">More...</Link>
            </CardPrimaryAction>
          </Card>
        </GridCell>
      </GridRow>
    </Grid>
  );
};

export default Index;
