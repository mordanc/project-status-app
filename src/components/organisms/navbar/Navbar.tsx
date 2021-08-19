import React from 'react';
import { Link } from 'react-router-dom';

import NavRow from '../../molecules/NavRow/NavRow';

interface NavbarProps {
  navItems: Array<typeof NavRow>;
  textColor?: 'white' | 'black';
}

const NavHeading = ({ text }: { text: string }) => (
  <span className="text-white font-light uppercase">{text}</span>
);

const Navbar = ({ navItems = [], textColor }: NavbarProps) => {
  return (
    // <div className="hidden md:flex md:flex-col md:space-y-2 md:visible bg-gray-700 rounded-xl h-full p-4">
    <div className="hidden md:flex md:flex-col md:space-y-4 md:visible bg-gray-900 fixed left-0 top-0 h-full pl-2 pt-20">
      <NavHeading text="projects" />
      <Link to="/allProjects">
        <NavRow
          iconColor={textColor}
          rowText="All Projects"
          iconType="folder"
          onClick={() => {}}
          textColor={textColor}
        />
      </Link>
      <Link to="/redProjects">
        <NavRow
          iconColor={textColor}
          rowText="Red Projects"
          iconType="warning"
          onClick={() => {}}
          textColor={textColor}
        />
      </Link>
      <Link to="/yellowProjects">
        <NavRow
          iconColor={textColor}
          rowText="Yellow Projects"
          iconType="info"
          onClick={() => {}}
          textColor={textColor}
        />
      </Link>
      <Link to="/greenProjects">
        <NavRow
          iconColor={textColor}
          rowText="Green Projects"
          iconType="thumbsUp"
          onClick={() => {}}
          textColor={textColor}
        />
      </Link>
      <NavHeading text="Management" />
      <Link to="/createProject">
        <NavRow
          iconColor={textColor}
          rowText="Create Project"
          iconType="plus"
          onClick={() => {}}
          textColor={textColor}
        />
      </Link>
      <Link to="/admin">
        <NavRow
          iconColor={textColor}
          rowText="Admin"
          iconType="lock"
          onClick={() => {}}
          textColor={textColor}
        />
      </Link>
    </div>
  );
};

export default Navbar;
