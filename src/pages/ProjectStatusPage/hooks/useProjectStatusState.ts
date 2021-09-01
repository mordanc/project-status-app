import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

import { mockData } from 'components/organisms/statusTable/mockData';
import { axiosPromiseHandler } from 'utils/axiosPromiseHandler';

import { Project } from 'types';

export const useProjectStatusState = (useRealData = false) => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchAndSetData() {
    setLoading(true);
    setError(false);

    await new Promise(res =>
      setTimeout(() => {
        res('hi');
      }, 1000),
    );

    const [response, error] = await axiosPromiseHandler(
      axios.get('http://localhost:3004/projects'),
    );

    if (error) {
      setError(error);
      setLoading(false);
      return;
    }

    const data = response.data?.map((row: any) => {
      const date = new Date(row.modifiedDate);
      let newDate = row.modifiedDate;
      if (date) {
        newDate = format(date, 'Pp');
      }

      return { ...row, modifiedDate: newDate };
    });
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    if (useRealData) {
      fetchAndSetData();
    } else {
      setData(mockData);
      setError(false);
      setLoading(false);
    }
  }, [useRealData]);

  return { data, loading, error, fetchAndSetData };
};
