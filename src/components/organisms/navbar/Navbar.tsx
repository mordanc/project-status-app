import NavRow from 'components/molecules/NavRow/NavRow';
import { updateStatusFilter } from 'features/table/tableSlice';
import { useDispatch } from 'react-redux';

import SelectableList from '../selectableList/SelectableList';

interface NavbarProps {
  navItems: Array<typeof NavRow>;
  textColor?: 'white' | 'black';
}

const NavHeading = ({ text }: { text: string }) => (
  <span className="text-white font-light uppercase">{text}</span>
);

const Navbar = ({ navItems = [], textColor }: NavbarProps) => {
  const dispatch = useDispatch();

  return (
    <div className="hidden md:flex md:flex-col fixed left-0 top-0 h-full pt-20 pl-4 bg-gray-900">
      <NavHeading text="projects" />

      <SelectableList
        className="flex flex-col md:space-y-2"
        defaultSelectedIndex={0}
      >
        <NavRow
          iconColor={textColor}
          rowText="All Projects"
          iconType="folder"
          onClick={() => dispatch(updateStatusFilter('A'))}
          textColor={textColor}
          route="allProjects"
        />
        <NavRow
          iconColor={textColor}
          rowText="Red Projects"
          iconType="warning"
          onClick={() => dispatch(updateStatusFilter('R'))}
          textColor={textColor}
          route="redProjects"
        />
        <NavRow
          iconColor={textColor}
          rowText="Yellow Projects"
          iconType="info"
          onClick={() => dispatch(updateStatusFilter('Y'))}
          textColor={textColor}
          route="yellowProjects"
        />
        <NavRow
          iconColor={textColor}
          rowText="Green Projects"
          iconType="thumbsUp"
          onClick={() => dispatch(updateStatusFilter('G'))}
          textColor={textColor}
          route="greenProjects"
        />

        <NavHeading text="Management" />

        <NavRow
          iconColor={textColor}
          rowText="Create Project"
          iconType="plus"
          onClick={() => {}}
          textColor={textColor}
          route="createProject"
        />
        <NavRow
          iconColor={textColor}
          rowText="Admin"
          iconType="lock"
          onClick={() => {}}
          textColor={textColor}
          route="admin"
        />
      </SelectableList>
    </div>
  );
};

export default Navbar;
