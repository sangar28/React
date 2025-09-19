import React from "react";
import MenuItems from "./MenuItems";
import Header from "./Hero";

const MenuList = () => {
  return (
    <section className="menu-section">
      <h2>our signature Teas/Coffes</h2>
      <div className="menu-grid">
        {MenuItems.map((item) => (
          <div key={item.id} className="content">
            <div className="card">
              <img src={item.image} alt={item.name} />
              <li>
                <h3 className="item-name">{item.name}</h3>
              </li>
              <p>
                <strong>Type: </strong>
                {item.type}
              </p>
              <p className="description">
                <strong>Description: </strong>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuList;
