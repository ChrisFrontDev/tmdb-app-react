import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  // const handleGoToSearchPage = movieTitle => {
  //   history.push(`/search/${movieTitle}`);
  // };

  const menuItems = [
    {
      label: 'Movies',
      command: event => {
        history.push('/');
        // event.item: MenuItem instance
      },
    },
  ];
  const start = <span>MovieDb</span>;
  const end = <InputText placeholder="Search" type="text" />;

  return (
    <div>
      <div className="card">
        <Menubar model={menuItems} start={start} end={end} />
      </div>
    </div>
  );
};

export default Navbar;
