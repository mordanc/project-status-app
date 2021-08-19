import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { axiosPromiseHandler } from '../../../utils/axiosPromiseHandler';
import ContainerList from '../../organisms/containerList/ContainerList';
import Navbar from '../../organisms/navbar/Navbar';
import StatusTable from '../../organisms/statusTable/StatusTable';
import { mockData } from '../../organisms/statusTable/mockData';
import UserMessage from '../../molecules/userMessage/UserMessage';
import { Project } from '../../../types';
import Loading from '../../molecules/loading/Loading';
import SelectableList from '../../organisms/selectableList/SelectableList';
import Container from '../../molecules/container/Container';

interface ProjectStatusProps {
  navTextColor?: 'white' | 'black';
  useRealData?: boolean;
}

const buttons = [
  { label: '1', onClick: () => console.log('1') },
  { label: '2', onClick: () => console.log('2') },
  { label: '3', onClick: () => console.log('3') },
  { label: '4', onClick: () => console.log('4') },
];

const ProjectStatus = ({
  navTextColor,
  useRealData = true,
}: ProjectStatusProps) => {
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
      console.log(error);
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

  return (
    <div className="h-screen">
      <div className="flex " style={{ height: '90%' }}>
        <div className="w-1/5">
          <Navbar navItems={[]} textColor={navTextColor} />
        </div>
        <div className="overflow-scroll ml-10 mt-20">
          <ContainerList title="test" />

          {loading ? (
            <Loading color="hi" />
          ) : error ? (
            <UserMessage
              label="Oops! Something went wrong, please try again."
              buttons={[{ label: 'Retry', onClick: fetchAndSetData }]}
            />
          ) : (
            <StatusTable buttons={buttons} apiData={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
