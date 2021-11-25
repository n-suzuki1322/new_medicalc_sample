import React from "react";
import { slide as Menu } from "react-burger-menu";

const Burger = (props) => {
  

  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        here is home!
      </a>
      <a className="menu-item" href="/page2">
        ページ2
      </a>
      <a className="menu-item" href="/page3">
        ページ3
      </a>
      <a className="menu-item" href="/page4">
        ページ4
      </a>
      <a className="menu-item5" href="/page5">
        ページ5
      </a>
    </Menu>
  );
};

export default Burger;
