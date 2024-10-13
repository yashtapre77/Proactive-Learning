import React from 'react';

const Sidebar = ({ setYear }) => {
  return (
    <aside className="w-52 bg-black text-white p-5">
      <ul className="list-none">
        <li className="py-2 cursor-pointer hover:bg-gray-700" onClick={() => setYear('Overall')}>
          Overall
        </li>
        <li className="py-2 cursor-pointer hover:bg-gray-700" onClick={() => setYear('3rdYear')}>
          3rd Year
        </li>
        <li className="py-2 cursor-pointer hover:bg-gray-700" onClick={() => setYear('4thYear')}>
          4th Year
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
