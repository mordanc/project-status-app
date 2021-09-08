import ClipLoader from 'react-spinners/ClipLoader';

export const Loading = () => {
  return (
    <div className="flex flex-col">
      <div className=" w-1/2 m-auto pt-24 text-center align-center">
        <ClipLoader color={'black'} loading={true} size={100} />
      </div>
    </div>
  );
};

export default Loading;
