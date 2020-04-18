import useSWR from 'swr';
import React from 'react';
import groupBy from 'lodash/groupBy';
import toPairs from 'lodash/toPairs';
import sum from 'lodash/sum';
import fetcher from '../utils/fetch';

function useConfirmedDataByCountry() {
  const { data: confirmedData } = useSWR('/api/confirmed', fetcher, { suspense: true });
  return React.useMemo(() => {
    if (!confirmedData) {
      return [];
    }

    return toPairs(groupBy(confirmedData, 'countryRegion')).map(([country, list]) => {
      const confirmed = sum(list.map((data) => data.confirmed));
      const recovered = sum(list.map((data) => data.recovered));
      const deaths = sum(list.map((data) => data.deaths));
      const active = sum(list.map((data) => data.active));

      return {
        country,
        list,
        confirmed,
        recovered,
        deaths,
        active,
        iso3: list?.[0]?.iso3,
        iso2: list?.[0]?.iso2,
      };
    });
  }, [confirmedData]);
}

export default useConfirmedDataByCountry;
