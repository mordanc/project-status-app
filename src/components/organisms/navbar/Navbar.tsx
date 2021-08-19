import React from 'react';
import { Link } from 'react-router-dom';

import NavRow from '../../molecules/NavRow/NavRow';
import SelectableList from '../selectableList/SelectableList';

interface NavbarProps {
  navItems: Array<typeof NavRow>;
  textColor?: 'white' | 'black';
}

const NavHeading = ({ text }: { text: string }) => (
  <span className="text-white font-light uppercase">{text}</span>
);

const Navbar = ({ navItems = [], textColor }: NavbarProps) => {
  return (
    <div className="hidden md:flex md:flex-col fixed left-0 top-0 h-full pt-20 pl-2 bg-gray-900">
      <NavHeading text="projects" />

      <SelectableList className="flex flex-col md:space-y-2">
        <NavRow
          iconColor={textColor}
          rowText="All Projects"
          iconType="folder"
          onClick={() => {}}
          textColor={textColor}
          route="allProjects"
        />
        <NavRow
          iconColor={textColor}
          rowText="Red Projects"
          iconType="warning"
          onClick={() => {}}
          textColor={textColor}
          route="redProjects"
        />
        <NavRow
          iconColor={textColor}
          rowText="Yellow Projects"
          iconType="info"
          onClick={() => {}}
          textColor={textColor}
          route="yellowProjects"
        />
        <NavRow
          iconColor={textColor}
          rowText="Green Projects"
          iconType="thumbsUp"
          onClick={() => {}}
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
