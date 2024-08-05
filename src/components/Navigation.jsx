import React from 'react';
import { Menu } from '../helper/Menu';

export default function Navigation(props) {
  return (
    <nav className="fixed top-0 left-0 w-full text-white py-3 px-5 z-50 opacity-100">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-bold">ASD</h1>
        <div className="flex gap-x-5">
          <Menu
            onSectionChange={props.setSection}
            menuOpened={props.menuOpened}
            setMenuOpened={props.setMenuOpened}
          />
        </div>
      </div>
    </nav>
  );
}
