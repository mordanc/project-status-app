import { useState, useEffect } from 'react';
import axios from 'axios';

import { mockData } from 'components/organisms/statusTable/mockData';
import { axiosPromiseHandler } from 'utils/axiosPromiseHandler';

import { Project } from 'types';

export const useProjectStatusState = (useRealData = false) => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchAndSetData() {
    setLoading(true);

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

    setData(response.data);
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
