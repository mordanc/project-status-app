import ButtonGroup, { Buttons } from '../buttonGroup/ButtonGroup';

export const UserMessage = ({
  label,
  buttons,
}: {
  label: string;
  buttons?: Buttons[];
}) => {
  return (
    <div className="flex flex-col w-1/2 ml-auto mr-auto pt-24 text-center items-center space-y-6">
      <span className="text-3xl font-bold">{label}</span>
      <div>{buttons && <ButtonGroup buttons={buttons} color="primary" />}</div>
    </div>
  );
};

export default UserMessage;
