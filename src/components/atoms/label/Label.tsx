import { LabelProps } from './types';

const Label = ({ labelTitle, labelBody }: LabelProps) => {
  return (
    <div className="flex flex-col w-28 uppercase break-words">
      <span className="text-2xl mb-2">{labelTitle}</span>
      <span>{labelBody}</span>
    </div>
  );
};

export default Label;
