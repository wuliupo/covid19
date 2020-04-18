import useSWR, { ConfigInterface } from 'swr';
import React from 'react';
import groupBy from 'lodash/groupBy';
import toPairs from 'lodash/toPairs';
import sum from 'lodash/sum';
import fetcher from '../utils/fetch';

function useDailyData(config: ConfigInterface = {}) {
  return useSWR('/api/daily', fetcher, { suspense: true, ...config });
}

function useOverallData(config: ConfigInterface = {}) {
  return useSWR('/api', fetcher, { suspense: true, ...config });
}

function useConfirmData(config: ConfigInterface = {}) {
  return useSWR('/api/confirmed', fetcher, { suspense: true, ...config });
}

function useConfirmedDataByCountry() {
  const { data: confirmedData, ...rest } = useConfirmData();
  const normalizedData = React.useMemo(() => {
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

  return {
    data: normalizedData,
    ...rest,
  };
}

export {
  useConfirmedDataByCountry,
  useDailyData,
  useOverallData,
  useConfirmData,
};
