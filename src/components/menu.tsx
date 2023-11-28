'use client'

import { useState } from "react";
import "src/style/components/menu.css"; 

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    const menu = document.getElementById("menux");
    setIsOpen(!isOpen);

    isOpen
      ? menu?.setAttribute("checked", "checked")
      : menu?.removeAttribute("checked");
  }

  return (
    <aside>
      <input type="checkbox" id="menux" name="menux" value="menux" onClick={handleOpenMenu} />
      {isOpen && <div className="overlay"></div>}
      <div className="menu">
        <img src="/login/Logo unit.gif" />
        <label className="botao" htmlFor="menux">
          <div className="mais1"></div>
        </label>
        <ul className="list-group">
          <li className="list-group-item">Portal</li>
          <li className="list-group-item">Extensão</li>
          <li className="list-group-item">Graduação</li>
          <li className="list-group-item">Protocolo</li>
          <li className="list-group-item">Pós-Graduação</li>
          <li className="list-group-item">Sistema EAD</li>
          <li className="list-group-item">Biblioteca Virtual</li>
        </ul>

        <ul className="list-group header-itens-mobile">
          <li className="list-group-item">Tiradentes Innovation Center</li>
          <li className="list-group-item">Unit Carreiras</li>
          <li className="list-group-item">Google for Education</li>
          <li className="list-group-item">Matricula</li>
          <li className="list-group-item">Wifi</li>
        </ul>
      </div>
    </aside>
  );
};

export default Menu;
