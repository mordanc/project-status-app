import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export interface LoadingProps {
  color: string;
}

export const Loading = ({ color }: LoadingProps) => {
  return (
    <div className="flex flex-col">
      <div className=" w-1/2 m-auto pt-24 text-center align-center h-16">
        <ClipLoader color={'black'} loading={true} size={100} />
      </div>
    </div>
  );
};

export default Loading;
