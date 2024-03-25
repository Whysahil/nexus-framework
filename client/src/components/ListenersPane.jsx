import React from "react";

const ListenersPane = () => {
  return (
    <div className="font-poppins">
      <h1 className="text-xl">Listeners</h1>
      <ul className="menu menu-lg bg-base-200 w-100">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a className="active">Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
};

export default ListenersPane;
