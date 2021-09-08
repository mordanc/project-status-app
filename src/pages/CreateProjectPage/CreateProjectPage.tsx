import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { axiosPromiseHandler } from 'utils/axiosPromiseHandler';
import Label from 'components/atoms/label/Label';

import { IFormInput } from './types';

export const Input = (props: any) => {
  return <input className="border-black border pl-1 rounded" {...props} />;
};

export const InputDiv = ({
  labelText,
  registerProps,
  className,
}: {
  labelText: string;
  registerProps: any;
  className?: string;
}) => {
  return (
    <div className="flex flex-col w-32">
      <label>{labelText}</label>
      <Input
        className={`border-black border ${className}`}
        {...registerProps}
      />
    </div>
  );
};

const CreateProjectPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => submitProject(data);

  const submitProject = async (params: any) => {
    await axiosPromiseHandler(
      axios.post('http://localhost:3004/projects', params),
    );
  };

  return (
    <div className=" ml-12 mt-32 text-black">
      <Label labelTitle="Create Project" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-top space-x-2 mt-20"
      >
        <InputDiv
          labelText="Manager"
          registerProps={{
            ...register('projectManager', { required: true, maxLength: 20 }),
          }}
        />
        <div className="flex flex-col w-32">
          <label>Project Name</label>
          <Input
            className="border-black border"
            {...register('projectName', { required: true, maxLength: 20 })}
          />
        </div>
        <div className="flex flex-col w-32">
          <label>Status</label>
          <Input
            className="border-black border"
            {...register('overallStatus', { required: true, maxLength: 20 })}
          />
        </div>
        <div className="flex flex-col w-32">
          <label>Date</label>
          <Input
            className="border-black border"
            placeholder={'2017-12-15 07:18:33'}
            {...register('modifiedDate', { required: true, maxLength: 20 })}
          />
        </div>
        <div className="flex flex-col w-52">
          <label>Percentage Complete</label>
          <Input
            className="border-black border"
            {...register('percentageComplete', {
              required: true,
              maxLength: 20,
            })}
            type="number"
          />
        </div>
        <Input
          type="submit"
          className=" border-2 border-black px-4 py-2 rounded hover:bg-blue-400 cursor-pointer transition"
        />
      </form>
    </div>
  );
};

export default CreateProjectPage;
